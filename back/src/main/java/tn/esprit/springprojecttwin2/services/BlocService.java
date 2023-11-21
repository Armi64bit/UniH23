package tn.esprit.springprojecttwin2.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.repository.BlocRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class BlocService implements IBlocService {
    @Autowired
    BlocRepository blocRep;

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
    public Bloc UpdateBloc(Bloc b) {
        return blocRep.save(b);
    }
}
