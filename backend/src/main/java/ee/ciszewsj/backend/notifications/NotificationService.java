package ee.ciszewsj.backend.notifications;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

@Slf4j
@Service
public class NotificationService {

	private final FirebaseApp app;

	public NotificationService(ResourceLoader loader) throws IOException {
		InputStream serviceAccount = loader.getResource("classpath:education.json").getInputStream();


		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();

		app = FirebaseApp.initializeApp(options);
		log.info("??? {}", app);
	}

	public void sendNotificationToUser() throws FirebaseMessagingException {
		Notification notification = Notification.builder()
				.setTitle("title")
				.setBody("body")
				.build();
		Message message = Message.builder()
				.setNotification(notification)
//				.setTopic("topic")
				.setToken("eoiZ2QDXSpKh0e03wj04Yh:APA91bEWJV3gVEvgUl-cbxQpqS5wDzybSiovjTo1mux5KscVUmkKjEUWs4ePZMpU7rcWY0md_TObbJnrTXHcNz4D314eIufnoE1q6UgaKISb9vsRUuDufpMqK0kGUmC0oOSxzbgb1dZw")
				.build();
		FirebaseMessaging.getInstance(app).send(message);


		FirebaseAuth auth = FirebaseAuth.getInstance();
		String email = "example@gmail.com";
		String password = "password123";

	}
}
