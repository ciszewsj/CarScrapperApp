package ee.ciszewsj.backend.rabbitmq.data;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EventConfigRequest {
	private String name;
	private String category;
	private Long priceFrom;
	private Long priceTo;
}
