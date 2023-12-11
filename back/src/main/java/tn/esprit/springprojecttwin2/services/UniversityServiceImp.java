package tn.esprit.springprojecttwin2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.repository.FoyerRepository;
import tn.esprit.springprojecttwin2.repository.UniversityRepository;
import tn.esprit.springprojecttwin2.repository.UniversityRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UniversityServiceImp  implements IUniversity{
    @Autowired
    private UniversityRepository universityRepository;
    @Autowired
    private FoyerRepository foyerRepositoy;

    @Override
    public University addUniversity(University u) {
        return universityRepository.save(u);
    }

    @Override
    public University updateUniversity(University u) {
        return universityRepository.save(u);
    }

    @Override
    public List<University> findAllUniversity() {
        return universityRepository.findAll();
    }

    @Override
    public University findById(long idUniversity) {
        return universityRepository.findById(idUniversity).orElse(null);
    }

    @Override
    public void deleteUniversity(long idUniversity) {
        universityRepository.deleteById(idUniversity);
    }

    @Override
    public University affecterFoyerAUniversity(long idFoyer, String nomUniversity) {
        Foyer foyer = foyerRepositoy.findById(idFoyer).get();
        University university = universityRepository.findByNomUniversity(nomUniversity);
        university.setFoyer(foyer);
        universityRepository.save(university);

        return university;
    }

    @Override
    public University desaffecterFoyerAUniversity(long idUniversity) {
        University university = universityRepository.findById(idUniversity).get();
        university.setFoyer(null);
        universityRepository.save(university);
        return university;
    }

    @Override
    public University getByNomUniversity(String nomUniversity) {
        return universityRepository.findByNomUniversity(nomUniversity);
    }

    @Override
    public University getUniversityByNomFoyer(String nomFoyer) {
        return universityRepository.findUniversityByFoyer_NomFoyer(nomFoyer);
    }

    @Override
    public List<University> getByAdresse(String adresse) {
        return universityRepository.selectByAdresse(adresse);
    }


    @Override
    public Long getNombreTotalChambresByNomUniversity(String nomUniversity) {
        return universityRepository.countChambresByNomUniversity(nomUniversity);
    }

    @Override
    public List<University> getByNombreMinChambres(int nombreMinChambres) {
        return universityRepository.findByNombreMinChambres(nombreMinChambres);
    }

    @Override
    public List<String> findFoyersWithoutUniversity() {
        return universityRepository.findFoyersWithoutUniversity();
    }

    @Override
    public Map<String, Long> getNombreTotalChambresForAllUniversities() {
        List<Object[]> stats = universityRepository.countChambresForAllUniversities();

        Map<String, Long> statisticsMap = new HashMap<>();
        for (Object[] stat : stats) {
            String nomUniversity = (String) stat[0];
            Long totalChambres = (Long) stat[1];
            statisticsMap.put(nomUniversity, totalChambres);
        }

        return statisticsMap;
    }


}
