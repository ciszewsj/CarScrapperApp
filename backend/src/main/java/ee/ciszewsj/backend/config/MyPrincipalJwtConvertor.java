package ee.ciszewsj.backend.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class MyPrincipalJwtConvertor implements Converter<Jwt, AbstractAuthenticationToken> {
	private List<String> clientIds = new ArrayList<>();

	@Override
	public AbstractAuthenticationToken convert(Jwt jwt) {
		TTT a = new TTT(jwt.getTokenValue(), jwt.getIssuedAt(), jwt.getExpiresAt(), jwt.getHeaders(), jwt.getClaims());
		log.info("WTDSADSA");
		return new JwtAuthenticationToken(a, new ArrayList<>());
//		return new JwtAuthenticationToken(source, new ArrayList<>());
	}
}


