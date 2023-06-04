package ee.ciszewsj.backend.rabbitmq.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class EventResponse<K> {
	@JsonProperty(value = "type", required = false)
	private Type type;
	@JsonProperty(value = "user_id", required = false)
	private String userId;
	@JsonProperty(value = "body", required = false)
	private List<?> body;

	public enum Type {
		GET_CATEGORY,
		GET_CARS_FOR_USER
	}
}
