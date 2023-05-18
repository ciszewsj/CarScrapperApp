package ee.ciszewsj.backend.controller.account;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
	@NotEmpty
	@Size(min = 4, max = 24)
	private String name = "";
	@NotEmpty
	@Email
	private String email = "";
	@NotEmpty
	@Size(min = 4, max = 52)
	private String password = "";
}
