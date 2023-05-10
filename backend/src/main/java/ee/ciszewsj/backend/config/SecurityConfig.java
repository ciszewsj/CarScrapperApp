package ee.ciszewsj.backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	//	private final JwtAuthenticationFilter jwtAuthenticationFilter;
//
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
//				.addFilter(jwtAuthenticationFilter)
				.authorizeHttpRequests()
				.anyRequest().authenticated();
		http.oauth2ResourceServer()
				.jwt()
				.jwtAuthenticationConverter(new MyPrincipalJwtConvertor());
//				.jwt(jwtConfigurer -> jwtConfigurer.jwtAuthenticationConverter(new MyPrincipalJwtConvertor()));
		return http.build();
	}

	@Bean
	public JwtDecoder jwtDecoder() {
		return JwtDecoders.fromIssuerLocation("https://securetoken.google.com/education-a3a09");
	}

//	@Bean
//	public MyPrincipalJwtConvertor jwtAuthenticationConverter() {
//		JwtGrantedAuthoritiesConverter authoritiesConverter = new JwtGrantedAuthoritiesConverter();
//		authoritiesConverter.setAuthoritiesClaimName("roles");
//
//		MyPrincipalJwtConvertor authenticationConverter = new MyPrincipalJwtConvertor();
//		authenticationConverter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);
//
//		return authenticationConverter;
//	}

}
