package ee.ciszewsj.backend.controller.productconfig;

import lombok.Data;

@Data
public class ProductConfigRequest {
	private String name = "";
	private Long categoryId;
	private Long priceFrom;
	private Long priceTo;
}
