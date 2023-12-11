package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;

import java.util.List;
import java.util.Set;

public interface IChambreService {
    public List<Chambre> AllChambres();
    public Chambre ChambreById(Long id);
    public Chambre addChambre(Chambre b);
    public void removeChambre(long id);
    public Chambre UpdateChambre(Chambre b);
    public Bloc getBlocByChambreId(long idChambre);
    public Set<Chambre> findbyblocname(String blocname);

}
