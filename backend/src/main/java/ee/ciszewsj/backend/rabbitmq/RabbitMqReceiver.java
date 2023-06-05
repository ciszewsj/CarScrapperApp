package ee.ciszewsj.backend.rabbitmq;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import ee.ciszewsj.backend.database.*;
import ee.ciszewsj.backend.notifications.NotificationService;
import ee.ciszewsj.backend.rabbitmq.data.EventResponse;
import ee.ciszewsj.backend.rabbitmq.data.ItemRepresentationResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static ee.ciszewsj.backend.database.AppUser.createNewAppUser;


@Slf4j
@Component
@RequiredArgsConstructor
public class RabbitMqReceiver {

	private final ObjectMapper objectMapper;
	private final CategoryRepository categoryRepository;
	private final UserRepository userRepository;
	private final NotificationService notificationService;

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
							log.info(category);
							Category newCategory = new Category();
							newCategory.setName(category);
							newCategory = categoryRepository.save(newCategory);
							log.info("{} - {}", newCategory.getName(), newCategory.getId());
						});

			} else if (response.getType().equals(EventResponse.Type.GET_CARS_FOR_USER)) {
				List<Product> productToSendList = new ArrayList<>();
				AppUser user = userRepository.findById(response.getUserId()).orElseGet(() -> userRepository.save(createNewAppUser(response.getUserId())));
				List<ItemRepresentationResponse> items = objectMapper.convertValue(response.getBody(), new TypeReference<>() {
				});
				List<Product> productList = user.getProductList();
				items.forEach(i -> log.info("{}", i.getUrl()));
				items.stream().distinct()
						.filter(item -> item.getUrl() != null)
						.forEach(item -> {
							log.info(item.toString());
							try {
								Product product = productList.stream().filter(product1 -> product1.getUrl().equals(item.getUrl())).findFirst().orElse(null);
								if (product != null) {
									product.setLastSeen(new Date());
								} else {
									product = new Product();
									product.setUrl(item.getUrl());
									product.setCategory(categoryRepository.findFirstByName(item.getCategory()).orElseThrow());
									product.setName(item.getName());
									product.setPrice(item.getPrice());
									product.setImageUrl(item.getImage());
									product.setAddedDate(item.getDate());
									product.setPlace(item.getPlace());
									user.getProductList().add(product);
									productToSendList.add(product);
								}
							} catch (Exception e) {
								log.error(e.toString());
							}
						});
				userRepository.save(user);
				productToSendList.forEach(product -> notificationService.sendNotificationToUser(user.getId(), product));


			} else {
				log.error("NOT SUPPORTED TYPE!");
			}
		} catch (Exception e) {
			log.error(e.toString());
		}
	}
}
