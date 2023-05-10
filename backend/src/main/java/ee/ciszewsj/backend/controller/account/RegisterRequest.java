package ee.ciszewsj.backend.controller.account;

import lombok.Data;

@Data
public class RegisterRequest {
	private String name = "";
	private String email = "";
	private String password = "";
}
