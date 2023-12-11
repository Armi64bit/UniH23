package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface    EtudiantRepository extends JpaRepository<Etudiant, Long> {
    @Query("SELECT reservation FROM Reservation reservation JOIN reservation.etudiants etudiants WHERE etudiants.idEtudiant = :idEtudiant")
    List<Reservation> retrieveReservationsByEtudiantId(@Param("idEtudiant") Long id);
    Etudiant findByCin(long cin);

    @Query("SELECT e.ecole, COUNT(e) FROM Etudiant e WHERE e.ecole = :school GROUP BY e.ecole")
    List<Object[]> countStudentsByEcole(@Param("school") String school);



    @Query("SELECT e FROM Etudiant e WHERE (:cin is null or e.cin = :cin) " +
            "and (:nomEtudiant is null or e.nomEtudiant = :nomEtudiant) " +
            "and (:prenomEtudiant is null or e.prenomEtudiant = :prenomEtudiant)")
    List<Etudiant> advancedSearch(@Param("cin") Long cin,
                                  @Param("nomEtudiant") String nomEtudiant,
                                  @Param("prenomEtudiant") String prenomEtudiant);


}
