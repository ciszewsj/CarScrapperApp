package ee.ciszewsj.backend.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ProductConfig {
	@Id
	@Column(name = "id", nullable = false)
	private Long id;
	private String name;
	@OneToOne
	private Category category;
	private Long priceFrom;
	private Long priceTo;
}
