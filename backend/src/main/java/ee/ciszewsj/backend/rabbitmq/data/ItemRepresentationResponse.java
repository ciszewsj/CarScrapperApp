package ee.ciszewsj.backend.rabbitmq.data;

import lombok.Data;

@Data
public class ItemRepresentationResponse {
	private String name;
	private String category;
	private Long price;
	private String image;
	private String url;
}
