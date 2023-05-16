package ee.ciszewsj.backend.database;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ProductConfig {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@OneToOne(fetch = FetchType.EAGER)
	private Category category;
	private Long priceFrom;
	private Long priceTo;
}
