package tn.esprit.springprojecttwin2.services;

import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface IReservationService {
    public Reservation addReservation(Reservation r) ;
    public Reservation addReservationEt(Reservation r , long id) ;
    public Reservation updateReservation(Reservation  r) ;
    public List<Reservation> findAllReservation() ;
    public Reservation findById (String idr) ;
    public void deleteReservation(String idr);
    public List<Reservation> retrieveReservationsByEtudiantNom(@Param("nomEtudiant") String nom);
    public List<Reservation> findByEtudiantsNomEtudiantStartingWithIgnoreCase(String prefixeNom);
    public List<Etudiant> retrieveEtudiantsByIdReservation(String id);
    public Chambre findChambreByReservationIdReservation(String idReservation) ;
    public void DeleteRes(String idReservation);

    public Reservation assignEtudiantToReservation (String id , Long num ) ;
    public Chambre assignChambreToReservation (String id , Long num ) ;


    public Chambre removeChambreFromReservation(Long idChambre, String idReservation) ;
    public Chambre removeChambreFromReservation2(Long idChambre, String idReservation);
    public Reservation addReservationAndAssignToChambre(Reservation r , long numChambre);
    public ResponseEntity<Reservation> addReservationAndAssignToChambre2(Reservation r, long numeroChambre);
    public List<Reservation> findByEtudiant(long cin);

}
