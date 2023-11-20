package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("SELECT r FROM Reservation r WHERE :idEtudiant IN (SELECT e.idEtudiqnt FROM r.etudiants e)")
    List<Reservation> findReservationsByEtudiantId(@Param("idEtudiant") long idEtudiant);


}
