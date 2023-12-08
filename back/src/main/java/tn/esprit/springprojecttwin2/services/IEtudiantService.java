package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;

import java.util.List;

public interface IEtudiantService {
    public List<Etudiant> AllEtudiants();
    public Etudiant EtudiantById(Long id);
    public Etudiant addEtudiant(Etudiant b);
    public void removeEtudiant(long id);
    public Etudiant UpdateEtudiant(Etudiant b);
    public List<Etudiant> searchEtudiants(long cin) ;
    public List<Object[]> countStudentsByEcole(String school);
    public List<Etudiant> advancedSearch(long cin, String nomEtudiant, String prenomEtudiant);
    public List<Reservation> getReservationsForEtudiant(Long idEtudiant);
    public  int calculateEtudiantAge(Etudiant etudiant);
}
