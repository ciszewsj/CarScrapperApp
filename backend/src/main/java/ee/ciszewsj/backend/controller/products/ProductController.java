package ee.ciszewsj.backend.controller.products;

import ee.ciszewsj.backend.config.CustomAuthenticationObject;
import ee.ciszewsj.backend.database.*;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import static ee.ciszewsj.backend.database.AppUser.createNewAppUser;

@Slf4j
@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
	private final UserRepository repository;
	private final CategoryRepository categoryRepository;
	private final ProductRepository productRepository;

	@GetMapping
	public Page<Product> getProducts(
			@AuthenticationPrincipal CustomAuthenticationObject object,
			@RequestParam(value = "name", defaultValue = "") String productName,
			@RequestParam(value = "category", defaultValue = "") String categoryName,
			@RequestParam(value = "priceFrom", required = false) Long priceFrom,
			@RequestParam(value = "priceTo", required = false) Long priceTo,
			@RequestParam(value = "maxDate", required = false) Long maxDate,
			@RequestParam(value = "pageSize", required = false, defaultValue = "25") Integer pageSize,
			@RequestParam(value = "pageNumber", required = false, defaultValue = "0") Integer pageNumber
	) {
		AppUser user = repository.findById(object.getId())
				.orElseGet(() -> repository.save(createNewAppUser(object.getId())));

		Specification<Product> productSpecification = (root, query, criteriaBuilder) -> {
			Join<Product, Category> categoryJoin = root.join("category");
			Join<Product, AppUser> userProductJoin = root.join("user");

			Predicate namePredicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), criteriaBuilder.lower(criteriaBuilder.literal("%" + productName + "%")));
			Predicate categoryNamePredicate = criteriaBuilder.like(criteriaBuilder.lower(categoryJoin.get("name")), criteriaBuilder.lower(criteriaBuilder.literal("%" + categoryName + "%")));
			Predicate pricePredicate = criteriaBuilder.between(root.get("price"),
					priceFrom != null ? priceFrom : Long.MIN_VALUE,
					priceTo != null ? priceTo : Long.MAX_VALUE);
			Predicate maxDatePredicate = criteriaBuilder.lessThanOrEqualTo(root.get("found"),
					new Date(maxDate != null ? maxDate : Long.MAX_VALUE));
			Predicate userIdPredicate = criteriaBuilder.equal(userProductJoin.get("id"), user.getId());

			query.orderBy(criteriaBuilder.desc(root.get("addedDate")));

			return criteriaBuilder.and(namePredicate, categoryNamePredicate, pricePredicate, maxDatePredicate, userIdPredicate);
		};

		return productRepository.findAll(productSpecification, PageRequest.of(pageNumber, pageSize));
	}

	@GetMapping("/{id}")
	public Product getProduct(@AuthenticationPrincipal CustomAuthenticationObject object,
	                          @PathVariable("id") Long id) {
		AppUser user = repository.findById(object.getId()).orElseGet(() -> repository.save(createNewAppUser(object.getId())));
		return productRepository.findFirstByIdAndUserId(id, user.getId()).orElseThrow();
	}

	@GetMapping("/categories")
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}
}
