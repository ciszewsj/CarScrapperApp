package ee.ciszewsj.backend.config;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {

	public static final String QUEUE_NAME = "request_queue";
	public static final String EXCHANGE_NAME = "request_exchange";
	public static final String QUEUE_RESPONSE_NAME = "response_queue";

	@Bean
	public Queue queue() {
		return new Queue(QUEUE_NAME, false);
	}

	@Bean
	public Queue queue2() {
		return new Queue(QUEUE_RESPONSE_NAME, false);
	}

	@Bean
	public DirectExchange exchange() {
		return new DirectExchange(EXCHANGE_NAME);
	}

	@Bean
	public Binding binding(Queue queue, DirectExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with(QUEUE_NAME);
	}
}

