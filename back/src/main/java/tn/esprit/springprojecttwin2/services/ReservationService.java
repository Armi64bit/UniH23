package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.repository.ChambreRepository;
import tn.esprit.springprojecttwin2.repository.EtudiantRepository;
import tn.esprit.springprojecttwin2.repository.ReservationRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j

public class ReservationService implements IReservationService{
    private ReservationRepository repo ;
    private EtudiantRepository etudiantRepository ;
    private ChambreRepository chambreRepository;


    @Override
    public Reservation addReservation(Reservation r) {
        System.out.println("teessssttt");
        return repo.save(r);

    }

    @Override
    public Reservation addReservationEt(Reservation r, long id) {
        Etudiant etudiant = etudiantRepository.findById(id).orElse(null);


        return null;
    }

    @Override
    public Reservation updateReservation(Reservation r) {
        return repo.save(r);
    }

    @Override
    public List<Reservation> findAllReservation() {
        return repo.findAll();
    }

    @Override
    public Reservation findById(String idr) {
        return repo.findById(idr).orElse(null) ;
    }

    @Override
    public void deleteReservation(String idr) {
        repo.deleteById(idr);
    }

    @Override
    public List<Reservation> retrieveReservationsByEtudiantNom(String nom) {
        return  repo.retrieveReservationsByEtudiantNom(nom);
    }

    @Override
    public List<Reservation> findByEtudiantsNomEtudiantStartingWithIgnoreCase(String prefixeNom) {
        /*   return repo.findByEtudiantsNomEtudiantStartingWithIgnoreCase(prefixeNom);
    */return null   ;}

    @Override
    public List<Etudiant> retrieveEtudiantsByIdReservation(String id) {
        return repo.findByReservationsIdReservation(id);

    }

    @Override
    public Chambre findChambreByReservationIdReservation(String idReservation) {
        return repo.findChambreByReservationIdReservation(idReservation);
    }


    @Override
    public void DeleteRes(String idReservation){
        Chambre chambre =repo.findChambreByReservationIdReservation(idReservation);
        Reservation res= repo.findById(idReservation).orElse(null);
        chambreRepository.deleteById(chambre.getIdChambre());
        repo.deleteById(idReservation);

    }

    @Override
    public Reservation assignEtudiantToReservation(String id , Long num) {
        Reservation res = repo.findById(id).orElse(null);
        Etudiant et = etudiantRepository.findById(num).orElse(null);
        res.getEtudiants().add(et);
        et.getReservations().add(res);
        return repo.save(res);
    }

    @Override
    public Chambre assignChambreToReservation(String id, Long num) {
        Reservation res = repo.findById(id).orElse(null);
        Chambre ch = chambreRepository.findById(num).orElse(null);
        List<Reservation>listR =new ArrayList<>();
        listR.add(res);
        ch.setReservations(listR);
        repo.save(res);

        return  chambreRepository.save(ch);
    }



    @Override
    public Chambre removeChambreFromReservation(Long idChambre, String idReservation) {
        Chambre chambre = chambreRepository.findById(idChambre).orElse(null);

        if (chambre != null) {
            // Recherche de la réservation dans la liste des réservations de la chambre
            Optional<Reservation> reservationToRemove = chambre.getReservations().stream()
                    .filter(reservation -> reservation.getIdReservation().equals(idReservation))
                    .findFirst();

            if (((Optional<?>) reservationToRemove).isPresent()) {
                // Retirez la réservation de la liste des réservations de la chambre
                chambre.getReservations().remove(reservationToRemove.get());

                // Enregistrez la chambre mise à jour
                chambreRepository.save(chambre);


                return chambre;
            }
        }

        return null; // Gérez le cas où la chambre n'a pas été trouvée ou l'association n'existe pas
    }

    //@Override
    //public Chambre removeChambreFromReservation2(Long idChambre, String idReservation){

    // Chambre chambre = chambreRepository.findById(idChambre).orElse(null);
    // Reservation res = repo.findById(idReservation).orElse(null);
    // chambre.getReservation().remove(res);
    //return chambreRepository.save(chambre);
    // }
    @Override
    public Chambre removeChambreFromReservation2(Long numeroChambre, String idReservation) {
        Chambre chambre = chambreRepository.findByNumeroChambre(numeroChambre);

        if (chambre != null) {
            Reservation res = repo.findById(idReservation).orElse(null);

            if (res != null) {
                chambre.getReservations().remove(res);
                chambreRepository.save(chambre);
            }
        }

        // Supprimer la réservation indépendamment de l'affectation de chambre
        repo.deleteById(idReservation);

        // Vous pouvez choisir de retourner la chambre mise à jour ou null, selon vos besoins.
        return chambre;
    }


    @Override
    public Reservation addReservationAndAssignToChambre(Reservation r, long numeroChambre) {

        Reservation reserv = repo.save(r);
        Chambre chambre = chambreRepository.findByNumeroChambre(numeroChambre);
        // List<Reservation> reserv2 = new ArrayList<>();
        // reserv2.add(reserv);
        chambre.getReservations().add(reserv);
        chambreRepository.save(chambre);

        return repo.save(reserv);
    }

    @Override
    public ResponseEntity<Reservation> addReservationAndAssignToChambre2(Reservation r, long numeroChambre) {

        Chambre chambre = chambreRepository.findByNumeroChambre(numeroChambre);
        List<Reservation> reserv2 = chambre.getReservations();

        if (reserv2 == null) {
            // Si la liste de réservations est null, initialisez-la avec une nouvelle liste
            reserv2 = new ArrayList<>();
        }

        // Vérifier si une réservation existe déjà pour la même année universitaire
        boolean reservationExists = false;
        for (Reservation reservation : reserv2) {
            Date anneeUniversitaire = reservation.getAnnerUniversitaire();
            if (anneeUniversitaire != null && anneeUniversitaire.getYear() == r.getAnnerUniversitaire().getYear()) {
                reservationExists = true;
                break;
            }
        }

        if (reservationExists) {
            // Une réservation existe déjà pour la même année universitaire, renvoyer une réponse avec un statut 400
            //android.util.Log.d(TAG, "addReservationAndAssignToChambre2: ");.info("NO RESPONSE");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        } else {
            // Aucune réservation pour la même année universitaire, ajouter la nouvelle réservation
            Reservation reserv = repo.save(r);
            reserv2.add(reserv);
            chambre.setReservations(reserv2);
            chambreRepository.save(chambre);
            log.info("JAWHAA BEHYYYY");
            return new ResponseEntity<>(reserv, HttpStatus.OK);


        }
    }

    @Override
    public List<Reservation> findByEtudiant(long cin) {

        Etudiant etudiant = etudiantRepository.findByCin(cin);
        List<Reservation> reservations =etudiant.getReservations();
        return reservations;
    }


}
