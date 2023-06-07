package ee.ciszewsj.backend.database;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class AppUser {
	@Id
	private String id;

//	@OneToMany(fetch = FetchType.EAGER)
//	@Cascade(CascadeType.ALL)
//	private List<Product> productList = new ArrayList<>();

	@OneToMany(fetch = FetchType.EAGER)
	@Cascade(CascadeType.ALL)
	private List<ProductConfig> productConfigList = new ArrayList<>();

	public static AppUser createNewAppUser(String id) {
		AppUser appUser = new AppUser();
		appUser.setId(id);
		return appUser;
	}
}
