package ee.ciszewsj.backend.database;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, String> {
}
