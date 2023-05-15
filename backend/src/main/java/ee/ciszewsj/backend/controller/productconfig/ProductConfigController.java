package ee.ciszewsj.backend.controller.productconfig;


import ee.ciszewsj.backend.config.CustomAuthenticationObject;
import ee.ciszewsj.backend.database.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@Slf4j
@RestController
@RequestMapping("/config")
@RequiredArgsConstructor
public class ProductConfigController {
	private final UserRepository repository;
	private final CategoryRepository categoryRepository;
	private final ProductConfigRepository configRepository;

	@GetMapping
	public List<ProductConfig> productConfigList(@AuthenticationPrincipal CustomAuthenticationObject object) {
		User user = repository.findById(object.getId()).orElseGet(() -> repository.save(new User(object.getId())));
		return user.getProductConfigList();
	}

	@GetMapping("/{id}")
	public ProductConfig getConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                               @PathVariable("id") Long id) {
		User user = repository.findById(object.getId()).orElseGet(() -> repository.save(new User(object.getId())));
		return user.getProductConfigList().stream().filter(product -> Objects.equals(product.getId(), id)).findFirst().orElseThrow();
	}

	@PostMapping
	public ProductConfig createProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                         @RequestBody ProductConfigRequest request) {
		Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow();
		User user = repository.findById(object.getId()).orElseThrow();

		ProductConfig config = new ProductConfig();
		return updateProductConfig(request, user, category, config);
	}

	@PutMapping("/{id}")
	public ProductConfig updateProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                         @RequestBody ProductConfigRequest request,
	                                         @PathVariable("id") Long id) {
		User user = repository.findById(object.getId()).orElseThrow();
		Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow();
		ProductConfig config = user.getProductConfigList().stream().filter(productConfig -> Objects.equals(productConfig.getId(), id)).findFirst().orElseThrow();

		return updateProductConfig(request, user, category, config);
	}

	@DeleteMapping("/{id}")
	public void deleteProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                @PathVariable("id") Long id) {
		User user = repository.findById(object.getId()).orElseThrow();
		ProductConfig config = user.getProductConfigList().stream().filter(productConfig -> Objects.equals(productConfig.getId(), id)).findFirst().orElseThrow();
		user.getProductConfigList().remove(config);
		repository.save(user);
	}

	private ProductConfig updateProductConfig(@RequestBody ProductConfigRequest request, User user, Category category, ProductConfig config) {
		config.setName(request.getName());
		config.setCategory(category);
		config.setPriceFrom(request.getPriceFrom());
		config.setPriceTo(request.getPriceTo());
		config = configRepository.save(config);

		user.getProductConfigList().add(config);
		repository.save(user);

		return config;
	}

}
