package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Universite;
import tn.esprit.springprojecttwin2.repository.UniversiteRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class UniversiteService implements IUniversiteService{
    @Autowired
    UniversiteRepository universiteRep;
    @Override
    public List<Universite> AllUniversites() {
        return universiteRep.findAll();
    }

    @Override
    public Universite UniversiteById(Long id) {
        return universiteRep.findById(id).get();
    }

    @Override
    public Universite addUniversite(Universite b) {
        return universiteRep.save(b);
    }

    @Override
    public void removeUniversite(long id) {
        universiteRep.deleteById(id);

    }

    @Override
    public Universite UpdateUniversite(Universite b) {
        return universiteRep.save(b);
    }
}
