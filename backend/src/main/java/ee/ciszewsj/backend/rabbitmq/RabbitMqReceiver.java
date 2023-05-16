package ee.ciszewsj.backend.rabbitmq;

import com.fasterxml.jackson.databind.ObjectMapper;
import ee.ciszewsj.backend.database.Category;
import ee.ciszewsj.backend.database.CategoryRepository;
import ee.ciszewsj.backend.database.UserRepository;
import ee.ciszewsj.backend.rabbitmq.data.EventRequest;
import ee.ciszewsj.backend.rabbitmq.data.EventResponse;
import ee.ciszewsj.backend.rabbitmq.data.ItemRepresentationResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.core.type.TypeReference;

import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@Component
@RequiredArgsConstructor
public class RabbitMqReceiver {

	private final ObjectMapper objectMapper;
	private final CategoryRepository categoryRepository;
	private final UserRepository userRepository;

	@RabbitListener(queues = "#{queue2.name}")
	public void receiveMessage(String message) {
		try {
			log.info("Receive: {}", message);
			EventResponse<?> response = objectMapper.readValue(message, EventResponse.class);
			if (response.getType().equals(EventResponse.Type.GET_CATEGORY)) {
				List<String> categories = objectMapper.convertValue(response.getBody(), new TypeReference<>() {
				});
				List<String> existedCategory = categoryRepository
						.findAll().stream()
						.map(Category::getName)
						.collect(Collectors.toList());

				categories.stream()
						.distinct()
						.filter(category -> !existedCategory.contains(category))
						.forEach(category -> {
							Category newCategory = new Category();
							newCategory.setName(category);
							categoryRepository.save(newCategory);
						});
			} else if (response.getType().equals(EventResponse.Type.GET_CARS_FOR_USER)) {
				List<ItemRepresentationResponse> items = objectMapper.convertValue(response.getBody(), new TypeReference<>() {
				});

				items.forEach(item -> {
					log.info("{} - {} - {} - {}", item.getName(), item.getCategory(), item.getPrice(), item.getImage());
				});

			} else {
				log.error("NOT SUPPORTED TYPE!");
			}
		} catch (Exception e) {
			log.error(e.toString());
		}
	}
}
