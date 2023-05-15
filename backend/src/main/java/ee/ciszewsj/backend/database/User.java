package ee.ciszewsj.backend.database;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
	public User(String id) {
		this.id = id;
	}

	@Id
	private String id;

	@OneToMany
	private List<Product> productList = new ArrayList<>();

	@OneToMany
	private List<ProductConfig> productConfigList = new ArrayList<>();
}
