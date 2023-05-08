package ee.ciszewsj.backend.controller.account;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {

	private final FirebaseAuth firebaseAuth;

	@PostMapping("/register")
	public void register(@RequestBody @Validated RegisterRequest request, @AuthenticationPrincipal User authentication) throws FirebaseAuthException {
		log.error("??? {}", SecurityContextHolder.getContext().getAuthentication().getPrincipal());
		log.info(authentication.getUsername());
//		log.info(authentication.getPrincipal().toString());
	}

	@PostMapping("/change")
	public void changeAccount() {

	}
}
