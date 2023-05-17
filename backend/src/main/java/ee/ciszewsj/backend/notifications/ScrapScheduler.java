package ee.ciszewsj.backend.notifications;

import com.fasterxml.jackson.core.JsonProcessingException;
import ee.ciszewsj.backend.database.UserRepository;
import ee.ciszewsj.backend.rabbitmq.RabbitMqService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@EnableScheduling
@RequiredArgsConstructor
public class ScrapScheduler {
	private final UserRepository userRepository;
	private final RabbitMqService rabbitMqService;

	@Scheduled(fixedRate = 60000)
	public void scheduleTask() {
		userRepository
				.findAll()
				.forEach(
						appUser -> appUser.getProductConfigList()
								.forEach(config ->
										{
											try {
												rabbitMqService
														.getProductsForConfig(appUser.getId(),
														config);
											} catch (JsonProcessingException e) {
												e.printStackTrace();
											}
										}
								)
				);

	}
}
