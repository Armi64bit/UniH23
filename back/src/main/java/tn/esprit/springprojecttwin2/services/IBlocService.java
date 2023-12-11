package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;

import java.util.List;

public interface IBlocService {
    public List<Bloc> AllBlocs();
    public Bloc BlocById(Long id);
    public Bloc addBloc(Bloc b);
    public void removeBloc(long id);
    public Bloc UpdateBloc(Bloc bloc,long idBloc);
    public List<Chambre> getChambresByBlocId(Long blocId);
    public void assignStudentToBloc(Long idEtudiqnt, Long idBloc);
    List<Etudiant> getStudentsAssignedToBlocks();


}
