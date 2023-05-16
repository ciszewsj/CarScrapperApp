package ee.ciszewsj.backend.controller.products;

import ee.ciszewsj.backend.config.CustomAuthenticationObject;
import ee.ciszewsj.backend.database.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@GetMapping
	public List<Product> getProducts(@AuthenticationPrincipal CustomAuthenticationObject object) {
		AppUser user = repository.findById(object.getId()).orElseGet(() -> repository.save(createNewAppUser(object.getId())));
		return user.getProductList();
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
