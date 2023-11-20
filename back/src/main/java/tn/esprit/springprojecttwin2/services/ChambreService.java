package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.repository.ChambreRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ChambreService implements IChambreService {
    @Autowired
    ChambreRepository chambreRep;
    @Override
    public List<Chambre> AllChambres() {
        return chambreRep.findAll();
    }
    @Override
    public Chambre ChambreById(Long id) {
        return chambreRep.findById(id).get();
    }
    @Override
    public Chambre addChambre(Chambre b) {
        return chambreRep.save(b);
    }

    @Override
    public void removeChambre(long id) {
        chambreRep.deleteById(id);
    }

    @Override
    public Chambre UpdateChambre(Chambre b) {
        return chambreRep.save(b);
    }
    @Override
    public Bloc getBlocByChambreId(long idChambre) {
        return chambreRep.findBlocByChambreId(idChambre);
    }
}
