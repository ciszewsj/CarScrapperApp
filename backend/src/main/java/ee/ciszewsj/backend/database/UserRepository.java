package ee.ciszewsj.backend.database;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;


public interface UserRepository extends JpaRepository<AppUser, String>, JpaSpecificationExecutor {
//	List<Product> findProductListById(String id);
//
//	Page<Product> findProductListById(String id, Pageable pageable);
//
//	Page<Product> findProductList(Specification<Product> specification, Pageable pageable);

}
