package ee.ciszewsj.backend.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import ee.ciszewsj.backend.rabbitmq.RabbitMqService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class OnStartConfig {

	private final RabbitMqService rabbitMqService;

	@EventListener(ApplicationReadyEvent.class)
	public void onReady() throws JsonProcessingException {
		rabbitMqService.getCategories();
	}
}
