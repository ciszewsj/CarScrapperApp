package ee.ciszewsj.backend.controller.account;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@Slf4j
@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {

	private final FirebaseAuth firebaseAuth;

	@PostMapping("/register")
	public void register(@RequestBody @Validated RegisterRequest request, @AuthenticationPrincipal Jwt jwt, @AuthenticationPrincipal Principal principal) throws FirebaseAuthException {
		try {
			UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest();
			createRequest.setDisabled(false);
			createRequest.setEmailVerified(true);
			createRequest.setEmail(request.getEmail());
			createRequest.setPassword(request.getPassword());
			createRequest.setDisplayName(request.getName());
			firebaseAuth.createUser(createRequest);
		} catch (Exception e) {
			e.printStackTrace();
			throw new IllegalStateException();
		}

	}

	@PostMapping("/change")
	public void changeAccount() {

	}
}
