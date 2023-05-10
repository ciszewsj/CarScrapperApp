package ee.ciszewsj.backend.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.ArrayList;
import java.util.Collection;

public class PrincipalJwtConverter<K extends AbstractAuthenticationToken> implements Converter<Jwt, K> {

	@Override
	public K convert(Jwt source) {
		return null;
	}
}


