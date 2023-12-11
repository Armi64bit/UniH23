package tn.esprit.springprojecttwin2.services;

import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.entites.University;

import java.util.List;
import java.util.Map;

public interface IUniversity {
    public University addUniversity(University u);

    public University updateUniversity(University u);

    public List<University> findAllUniversity();

    public University findById(long idUniversity);

    public void deleteUniversity(long idUniversity);
    public University affecterFoyerAUniversity(long idFoyer, String nomUniversity);
    public University desaffecterFoyerAUniversity(long idUniversity) ;
    List<String> findFoyersWithoutUniversity();

    public University getByNomUniversity(String nomUniversity);
    public University getUniversityByNomFoyer(String nomFoyer);
    List<University> getByAdresse(String  adresse);
    Long getNombreTotalChambresByNomUniversity(String nomUniversity);

    List<University> getByNombreMinChambres(int nombreMinChambres) ;

    Map<String, Long> getNombreTotalChambresForAllUniversities();

}
