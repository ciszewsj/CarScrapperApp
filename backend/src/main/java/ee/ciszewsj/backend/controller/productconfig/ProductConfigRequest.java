package ee.ciszewsj.backend.controller.productconfig;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ProductConfigRequest {
	@NotEmpty
	@Size(min = 1, max = 52)
	private String name = "";
	@NotNull
	private Long categoryId;
	@Min(value = 0)
	@NotNull
	private Long priceFrom = 0L;
	@Min(value = 0)
	@NotNull
	private Long priceTo = 1000000L;
}
