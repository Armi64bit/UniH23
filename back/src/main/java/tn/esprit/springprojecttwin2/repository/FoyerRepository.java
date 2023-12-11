package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springprojecttwin2.entites.Foyer;

import java.util.List;

public interface FoyerRepository extends JpaRepository<Foyer, Long> {
    List<Foyer> findByCapaciteFoyerGreaterThan(long capacity);

}
