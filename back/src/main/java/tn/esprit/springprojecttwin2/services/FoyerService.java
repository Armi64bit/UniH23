package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Foyer;

import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.repository.BlocRepository;
import tn.esprit.springprojecttwin2.repository.ChambreRepository;
import tn.esprit.springprojecttwin2.repository.FoyerRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class FoyerService implements IFoyerService {    @Autowired
FoyerRepository foyerRep;
    @Autowired
    private BlocRepository blocRepository;
    @Autowired
    private ChambreRepository chambreRepository;

    @Override
    public List<Foyer> AllFoyers() {
        return foyerRep.findAll();
    }
    @Override
    public Foyer FoyerById(Long id) {
        return foyerRep.findById(id).get();
    }
    @Override
    public Foyer addFoyer(Foyer b) {
        return foyerRep.save(b);
    }
    @Override
    public void removeFoyer(long id) {
        foyerRep.deleteById(id);
    }
    @Override
    public Foyer UpdateFoyer(Foyer b) {
        return foyerRep.save(b);
    }
    @Override
    public List<Foyer> FoyersByCapacityGreaterThan(long capacity) {
        return foyerRep.findByCapaciteFoyerGreaterThan(capacity);
    }

    @Override
    public Foyer getFoyerDetails(Long id) {
        return foyerRep.findById(id).map(this::populateFoyerDetails).orElse(null);
    }
    private Foyer populateFoyerDetails(Foyer foyer) {
        // Charger les détails de l'université associée au foyer
        University universite = foyer.getUniversity();
        // Charger les détails des blocs associés au foyer
        List<Bloc> blocs = blocRepository.findByFoyer(foyer);

        blocs.forEach(bloc -> {
            // Charger les détails des chambres associées à chaque bloc
            List<Chambre> chambres = chambreRepository.findByBloc(bloc);
            bloc.setChambres(chambres);
        });

        foyer.setUniversity(universite);
        foyer.setBlocList(blocs);

        return foyer;
    }



}
