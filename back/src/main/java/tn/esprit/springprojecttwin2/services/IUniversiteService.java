package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.entites.Universite;

import java.util.List;

public interface IUniversiteService {
    public List<Universite> AllUniversites();
    public Universite UniversiteById(Long id);
    public Universite addUniversite(Universite b);
    public void removeUniversite(long id);
    public Universite UpdateUniversite(Universite b);
}
