package ee.ciszewsj.backend.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class WebControllerExceptionAdvice {
	@ExceptionHandler(IllegalStateException.class)
	public ResponseEntity<?> handleException() {
		return ResponseEntity.status(HttpStatus.CONFLICT)
				.body(null);
	}

}
