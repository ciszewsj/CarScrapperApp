package ee.ciszewsj.backend.notifications;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import ee.ciszewsj.backend.database.Product;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationService {

	private final FirebaseMessaging firebaseMessaging;

	public void sendNotificationToUser(String userId, Product product) {
		Notification notification = Notification.builder()
				.setTitle(product.getName())
				.setBody(product.getCategory().getName() + " - " + product.getPrice() + " PLN")
				.setImage(product.getImageUrl())
				.build();
		log.info("{} - {}", product.getName(), product.getCategory().getName());
		Message message = Message.builder()
				.setNotification(notification)
				.setTopic(userId)
				.build();
		try {
			firebaseMessaging.send(message);
		} catch (FirebaseMessagingException e) {
			e.printStackTrace();
		}
	}
}
