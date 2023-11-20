package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;

import java.util.List;

public interface IBlocService {
    public List<Bloc> AllBlocs();
    public Bloc BlocById(Long id);
    public Bloc addBloc(Bloc b);
    public void removeBloc(long id);
    public Bloc UpdateBloc(Bloc b);
    public List<Chambre> getChambresByBlocId(Long blocId);
}
