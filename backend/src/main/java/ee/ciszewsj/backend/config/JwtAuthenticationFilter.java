package ee.ciszewsj.backend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.core.Ordered;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

//@Component
public class JwtAuthenticationFilter {//extends OncePerRequestFilter implements Ordered {
//	private int order = SecurityProperties.DEFAULT_FILTER_ORDER + 1;
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//			throws ServletException, IOException {
//
//
//		// create user details, roles are required
//		Set<GrantedAuthority> authorities = new HashSet<>();
//		authorities.add(new SimpleGrantedAuthority("SOME ROLE"));
//		UserDetails userDetails = new User("SOME USERNAME", "SOME PASSWORD", authorities);
//
//		// Create an authentication token
//		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//		usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//		// follow the filter chain, using the new wrapped UserPrincipalHtppServletRequest
//		chain.doFilter(new UserPrincipalHttpServletRequest(request, usernamePasswordAuthenticationToken), response);
//		// all filters coming up, will be able to run request.getUserPrincipal()
//	}
//
//	@Override
//	public int getOrder() {
//		return order;
//	}
}
