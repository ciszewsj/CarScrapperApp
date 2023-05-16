package ee.ciszewsj.backend.database;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Product {
	@Id
	private Long id;

	private String userId;
	private String imageUrl;
	private String url;

	@ManyToOne
	private Category category;

	private Date addedDate;
	private Date lastSeen;

	private Long price;
}
