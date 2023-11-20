package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springprojecttwin2.entites.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}
