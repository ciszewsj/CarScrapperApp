package ee.ciszewsj.backend.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor {

	List<Product> findAllByUserId(String userId);

	Optional<Product> findFirstByIdAndUserId(Long id, String userId);
}
