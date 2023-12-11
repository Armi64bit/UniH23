package tn.esprit.springprojecttwin2.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.repository.BlocRepository;
import tn.esprit.springprojecttwin2.repository.EtudiantRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class BlocService implements IBlocService {
    @Autowired
    BlocRepository blocRep;
    @Autowired
    private BlocRepository blocRepository;
    @Autowired
    private EtudiantRepository etudiantRepository;

    @Override
    public List<Bloc> AllBlocs() {
        return blocRep.findAll();
    }
    @Override
    public Bloc BlocById(Long id) {
        return blocRep.findById(id).get();
    }
    @Override
    public Bloc addBloc(Bloc b) {
        return blocRep.save(b);
    }
    @Override
    public void removeBloc(long id) {
        blocRep.deleteById(id);
    }

    @Override
    public Bloc UpdateBloc(Bloc bloc, long idBloc) {


        Bloc existingBloc = blocRepository.findById(idBloc).orElse(null);
        if (existingBloc != null) {
            existingBloc.setNomBloc(bloc.getNomBloc());
            existingBloc.setCapacityBloc(bloc.getCapacityBloc());
            return blocRepository.save(existingBloc);
        } else {
            return null;
        }

    }

    /*@Override
    public Bloc C(Bloc b) {
        return blocRep.save(b);
    }
*/
  /*  public Bloc UpdateBloc(Bloc updatedBloc) {
        long idBloc = updatedBloc.getIdBloc();


        Optional<Bloc> existingFoyerOptional = blocRep.findById(idBloc);
        Bloc existingFoyer = existingFoyerOptional.get();
        existingFoyer.setNomBloc(updatedBloc.getNomBloc());
        existingFoyer.setCapacityBloc(updatedBloc.getCapacityBloc());
        existingFoyer.setFoyer(updatedBloc.getFoyer());


        return blocRep.save(existingFoyer);

    }*/


    @Override
    public List<Chambre> getChambresByBlocId(Long blocId) {
        return blocRepository.findChambresByBlocId(blocId);
    }

    @Override
    @Transactional
    public void assignStudentToBloc(Long idEtudiant, Long idBloc) {
        System.out.println("Assigning student to bloc. idEtudiant: " + idEtudiant + ", idBloc: " + idBloc);

        // Récupérer les entités de la base de données
        Bloc bloc = blocRepository.findById(idBloc).orElse(null);
        Etudiant etudiant = etudiantRepository.findById(idEtudiant).orElse(null);

        // Vérifier si les entités existent
        if (bloc == null || etudiant == null) {
            System.err.println("Bloc or student not found.");
            throw new IllegalArgumentException("Bloc or student not found.");
        }

        // Mettre à jour les deux côtés de la relation
        bloc.getEtudiants().add(etudiant);
        etudiant.getBlocs().add(bloc);

        // Enregistrer les modifications dans la base de données
        blocRepository.save(bloc);
        etudiantRepository.save(etudiant);
    }





    @Override
    public List<Etudiant> getStudentsAssignedToBlocks() {
        return etudiantRepository.findStudentsAssignedToBlocks();
    }


    public List<Chambre> getChambresByBloc(Long id) {
        return blocRepository.findChambresByBlocId(id);
    }


}
