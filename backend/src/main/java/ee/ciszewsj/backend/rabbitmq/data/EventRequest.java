package ee.ciszewsj.backend.rabbitmq.data;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EventRequest {
	private Type type;
	private String user_id;
	private EventConfigRequest body;

	public enum Type {
		GET_CATEGORY,
		GET_CARS_FOR_USER
	}
}
