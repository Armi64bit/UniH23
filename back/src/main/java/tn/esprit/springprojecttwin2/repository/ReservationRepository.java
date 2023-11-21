package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springprojecttwin2.entites.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
