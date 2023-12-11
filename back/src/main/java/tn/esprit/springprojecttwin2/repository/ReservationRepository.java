package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, String> {



    @Query("SELECT reservation FROM Reservation reservation JOIN reservation.etudiants etudiants WHERE etudiants.nomet = :nom")
    List<Reservation> retrieveReservationsByEtudiantNom(@Param("nom") String nom);

   // List<Reservation> findByEtudiantsNomEtudiantStartingWithIgnoreCase(String prefixeNom);
    @Query("SELECT r.etudiants FROM Reservation r WHERE r.idReservation = :id")
    List<Etudiant> findByReservationsIdReservation(@Param("id") String id);

    // Chambre findChambreByReservationIdReservation(String idReservation);
    @Query("SELECT c FROM Chambre c JOIN c.reservations r WHERE r.idReservation = :idReservation")
    Chambre findChambreByReservationIdReservation(@Param("idReservation") String idReservation);



    // public long countReservationsByTypeC(TypeChambre typeChambre);


}
