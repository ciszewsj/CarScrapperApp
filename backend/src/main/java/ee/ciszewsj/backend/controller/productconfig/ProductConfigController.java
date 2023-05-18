package ee.ciszewsj.backend.controller.productconfig;


import ee.ciszewsj.backend.config.CustomAuthenticationObject;
import ee.ciszewsj.backend.database.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.stream.Collectors;

import static ee.ciszewsj.backend.database.AppUser.createNewAppUser;

@Slf4j
@RestController
@RequestMapping("/config")
@RequiredArgsConstructor
public class ProductConfigController {
	private final UserRepository repository;
	private final CategoryRepository categoryRepository;
	private final ProductConfigRepository configRepository;

	public AppUser getUser(String id) {
		return repository.findById(id).orElseGet(() -> repository.save(createNewAppUser(id)));
	}

	@GetMapping
	public List<ProductConfig> productConfigList(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                             @RequestParam(value = "name", required = false, defaultValue = "") String productName,
	                                             @RequestParam(value = "category", required = false, defaultValue = "") String categoryName) {
		AppUser user = getUser(object.getId());
		return user.getProductConfigList().stream()
				.filter(config -> config.getName().toUpperCase(Locale.ROOT).contains(productName.toUpperCase(Locale.ROOT)))
				.filter(config -> config.getCategory().getName().toUpperCase(Locale.ROOT).contains(categoryName.toUpperCase(Locale.ROOT)))
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ProductConfig getConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                               @PathVariable("id") Long id) {
		AppUser user = getUser(object.getId());
		return user.getProductConfigList().stream().filter(product -> Objects.equals(product.getId(), id)).findFirst().orElseThrow();
	}

	@PostMapping
	public ProductConfig createProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                         @RequestBody @Valid ProductConfigRequest request) {
		Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow();
		AppUser user = getUser(object.getId());

		ProductConfig config = new ProductConfig();
		config = updateProductConfig(request, category, config);
		user.getProductConfigList().add(config);
		config = configRepository.save(config);
		return config;
	}

	@PutMapping("/{id}")
	public ProductConfig updateProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                         @RequestBody @Valid ProductConfigRequest request,
	                                         @PathVariable("id") Long id) {
		AppUser user = getUser(object.getId());
		Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow();
		ProductConfig config = user.getProductConfigList().stream().filter(productConfig -> Objects.equals(productConfig.getId(), id)).findFirst().orElseThrow();

		config = updateProductConfig(request, category, config);
		repository.save(user);

		return config;
	}

	@DeleteMapping("/{id}")
	public void deleteProductConfig(@AuthenticationPrincipal CustomAuthenticationObject object,
	                                @PathVariable("id") Long id) {
		AppUser user = getUser(object.getId());
		ProductConfig config = user.getProductConfigList()
				.stream()
				.filter(productConfig -> Objects.equals(productConfig.getId(), id))
				.findFirst()
				.orElseThrow();

		user.getProductConfigList().remove(config);
		repository.save(user);
		log.info("deleted");
	}

	private ProductConfig updateProductConfig(ProductConfigRequest request, Category category, ProductConfig config) {
		config.setName(request.getName());
		config.setCategory(category);
		config.setPriceFrom(request.getPriceFrom());
		config.setPriceTo(request.getPriceTo());
		config = configRepository.save(config);
		return config;

	}

}
