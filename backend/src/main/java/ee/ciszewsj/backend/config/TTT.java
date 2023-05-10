package ee.ciszewsj.backend.config;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.AbstractOAuth2TokenAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

import java.security.Principal;
import java.time.Instant;
import java.util.Collection;
import java.util.Map;

class TTT extends Jwt implements Principal {


	public TTT(String tokenValue, Instant issuedAt, Instant expiresAt, Map<String, Object> headers, Map<String, Object> claims) {
		super(tokenValue, issuedAt, expiresAt, headers, claims);
	}

	@Override
	public String getName() {
		return "NAME";
	}


}