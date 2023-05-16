package ee.ciszewsj.backend.rabbitmq;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ee.ciszewsj.backend.database.ProductConfig;
import ee.ciszewsj.backend.rabbitmq.data.EventRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;


@Slf4j
@Component
@RequiredArgsConstructor
public class RabbitMqService {

	private final RabbitMqClient rabbitMqClient;
	private final ObjectMapper mapper;

	public void getCategories() throws JsonProcessingException {
		String message = mapper.writeValueAsString(
				EventRequest.builder().type(EventRequest.Type.GET_CATEGORY).build()
		);
		rabbitMqClient.sendMessage(message);
	}

	public void getProductsForConfig(String userId, ProductConfig config) throws JsonProcessingException {
		EventRequest eventRequest = EventRequest.builder()
				.type(EventRequest.Type.GET_CARS_FOR_USER)
				.user_id(userId)
				.build();
		rabbitMqClient.sendMessage(mapper.writeValueAsString(eventRequest));

	}
}
