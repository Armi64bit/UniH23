package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;

import java.util.List;

public interface IEtudiantService {
    public List<Etudiant> AllEtudiants();
    public Etudiant EtudiantById(Long id);
    public Etudiant addEtudiant(Etudiant b);
    public void removeEtudiant(long id);
    public Etudiant UpdateEtudiant(Etudiant b);

}
