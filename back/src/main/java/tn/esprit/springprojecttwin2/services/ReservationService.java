package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.repository.ReservationRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ReservationService implements IReservationService{
    @Autowired
    ReservationRepository reservationRepo;
    @Override
    public List<Reservation> AllReservations() {
        return reservationRepo.findAll();
    }




    @Override
    public Reservation ReservationById(Long id) {
        return reservationRepo.findById(id).get();
    }

    @Override
    public Reservation addReservation(Reservation b) {
        return reservationRepo.save(b);
    }

    @Override
    public void removeReservation(long id) {
        reservationRepo.deleteById(id);

    }

    @Override
    public Reservation UpdateFoyer(Reservation b) {
        return reservationRepo.save(b);
    }
}
