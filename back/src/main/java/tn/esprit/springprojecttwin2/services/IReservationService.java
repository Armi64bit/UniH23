package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface IReservationService {
    public List<Reservation> AllReservations();
    public Reservation ReservationById(Long id);
    public Reservation addReservation(Reservation b);
    public void removeReservation(long id);
    public Reservation UpdateFoyer(Reservation b);
    public List<Reservation> getReservationsByEtudiantId(long idEtudiant);
}
