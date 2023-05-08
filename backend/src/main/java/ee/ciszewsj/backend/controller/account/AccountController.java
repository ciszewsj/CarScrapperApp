package ee.ciszewsj.backend.controller.account;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
	@PostMapping("/register")
	public void register(@RequestBody RegisterRequest request) {

	}

	@PostMapping("/change")
	public void changeAccount() {

	}
}
