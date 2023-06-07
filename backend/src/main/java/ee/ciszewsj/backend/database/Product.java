package ee.ciszewsj.backend.database;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String imageUrl;
	private String url;
	private String place;

	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;

	private Date addedDate = new Date();
	private Date found = new Date();
	private Date lastSeen = new Date();

	private Long price;

	@ManyToOne(fetch = FetchType.EAGER)
	private AppUser user;
}
