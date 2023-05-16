package ee.ciszewsj.backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.cors().disable()
				.authorizeHttpRequests()
				.requestMatchers("/swagger-ui/*", "/swagger-ui/**", "/swagger-ui").permitAll()
				.requestMatchers("/account/register").permitAll()
				.anyRequest().authenticated();
		http.oauth2ResourceServer()
				.jwt()
				.jwtAuthenticationConverter(new MyPrincipalJwtConvertor());
		return http.build();
	}

	@Bean
	public JwtDecoder jwtDecoder() {
		return JwtDecoders.fromIssuerLocation("https://securetoken.google.com/education-a3a09");
	}

}
