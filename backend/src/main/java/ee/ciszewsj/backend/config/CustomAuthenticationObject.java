package ee.ciszewsj.backend.config;

import org.springframework.security.oauth2.jwt.Jwt;

import java.security.Principal;
import java.time.Instant;
import java.util.Map;

class CustomAuthenticationObject extends Jwt implements Principal {
	public CustomAuthenticationObject(String tokenValue, Instant issuedAt, Instant expiresAt, Map<String, Object> headers, Map<String, Object> claims) {
		super(tokenValue, issuedAt, expiresAt, headers, claims);
	}
	@Override
	public String getName() {
		return "NAME";
	}
}