package ee.ciszewsj.backend.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.core.Ordered;

import java.security.Principal;


public class UserPrincipalHttpServletRequest extends HttpServletRequestWrapper {

	private final Principal principal;

	public UserPrincipalHttpServletRequest(HttpServletRequest request, Principal principal) {
		super(request);
		this.principal = principal;
	}

	@Override
	public Principal getUserPrincipal() {
		return principal;
	}
}
