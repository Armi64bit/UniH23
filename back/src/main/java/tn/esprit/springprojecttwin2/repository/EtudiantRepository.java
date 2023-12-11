package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    @Query("SELECT reservation FROM Reservation reservation JOIN reservation.etudiants etudiants WHERE etudiants.idEtudiqnt = :idEtudiant")
    List<Reservation> retrieveReservationsByEtudiantId(@Param("idEtudiant") Long id);
    Etudiant findByCin(long cin);

}
