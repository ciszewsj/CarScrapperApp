package ee.ciszewsj.backend.rabbitmq;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RabbitMqClient {

	private final RabbitTemplate rabbitTemplate;


	public void sendMessage(String message) {
		rabbitTemplate.convertAndSend("request_exchange", "request_queue", message);
		System.out.println("Wysłano wiadomość: " + message);
	}
}