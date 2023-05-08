package ee.ciszewsj.backend;

import com.google.firebase.messaging.FirebaseMessagingException;
import ee.ciszewsj.backend.notifications.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

@Configuration
@RequiredArgsConstructor
public class TestSend {
	private final NotificationService service;

	@EventListener(ApplicationReadyEvent.class)
	public void ready() {
		try {
			service.sendNotificationToUser();
		} catch (FirebaseMessagingException e) {
			e.printStackTrace();
		}
	}
}
