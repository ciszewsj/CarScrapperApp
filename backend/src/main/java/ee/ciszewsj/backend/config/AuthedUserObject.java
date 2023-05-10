package ee.ciszewsj.backend.config;

import lombok.Data;

import javax.security.auth.Subject;
import java.security.Principal;

@Data
public class AuthedUserObject implements Principal {
	private String name;
	private String email;

	@Override
	public String getName() {
		return name;
	}

	@Override
	public boolean implies(Subject subject) {
		return Principal.super.implies(subject);
	}
}
