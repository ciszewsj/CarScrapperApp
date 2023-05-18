package ee.ciszewsj.backend.controller.products;

import ee.ciszewsj.backend.config.CustomAuthenticationObject;
import ee.ciszewsj.backend.database.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.stream.Collectors;

import static ee.ciszewsj.backend.database.AppUser.createNewAppUser;

@Slf4j
@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
	private final UserRepository repository;
	private final CategoryRepository categoryRepository;

	@GetMapping
	public List<Product> getProducts(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                 @RequestParam(value = "name", required = false, defaultValue = "") String productName,
	                                 @RequestParam(value = "category", required = false, defaultValue = "") String categoryName,
	                                 @RequestParam(value = "priceFrom", required = false) Long priceFrom,
	                                 @RequestParam(value = "priceTo", required = false) Long priceTo
	) {
		AppUser user = repository.findById(object.getId()).orElseGet(() -> repository.save(createNewAppUser(object.getId())));
		return user.getProductList().stream()
				.filter(product -> product.getName().toUpperCase(Locale.ROOT).contains(productName.toUpperCase(Locale.ROOT)))
				.filter(product -> product.getCategory().getName().toUpperCase(Locale.ROOT).contains(categoryName.toUpperCase(Locale.ROOT)))
				.filter(product -> priceFrom == null || priceFrom <= product.getPrice())
				.filter(product -> priceTo == null || priceTo >= product.getPrice())
				.sorted((o1, o2) -> o2.getAddedDate().compareTo(o1.getAddedDate()))
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public Product getProduct(@AuthenticationPrincipal CustomAuthenticationObject object,
	                          @PathVariable("id") Long id) {
		AppUser user = repository.findById(object.getId()).orElseGet(() -> repository.save(createNewAppUser(object.getId())));
		return user.getProductList().stream().filter(product -> Objects.equals(product.getId(), id)).findFirst().orElseThrow();
	}

	@GetMapping("/categories")
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}
}
