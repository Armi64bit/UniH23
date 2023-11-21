package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Etudiant;

import java.util.List;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {

    List<Etudiant> findByCin(long cin);
    @Query("SELECT e.ecole, COUNT(e) FROM Etudiant e WHERE e.ecole = :school GROUP BY e.ecole")
    List<Object[]> countStudentsByEcole(@Param("school") String school);

}
