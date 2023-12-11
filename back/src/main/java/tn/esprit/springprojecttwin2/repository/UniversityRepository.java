package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.entites.University;

import java.util.List;

public interface UniversityRepository extends JpaRepository<University, Long> {
    University findByNomUniversity(String nomUniversity);
    University findUniversityByFoyer_NomFoyer(String nomFoyer);

    @Query("select u from University u where u.adresse=?1")
    List<University> selectByAdresse(String adress);

    // calculer le nombre total de chambres pour une université spécifique
    @Query("select count (c) from Chambre c where c.bloc.foyer.university.nomUniversity = :nomUniversity")
    Long countChambresByNomUniversity(String nomUniversity);

    // récupère les universités qui ont un nombre de chambres supérieur ou égal à la valeur spécifiée (nombreMinChambres
    @Query("select u from University u join u.foyer f join f.blocList b join b.chambres c  group by u.idUniversity having count (c) >= :nombreMinChambres")
    List<University> findByNombreMinChambres(int nombreMinChambres);

    //recupere les listes des foyers non affecter a aucun université
    @Query("SELECT f.nomFoyer FROM Foyer f WHERE f.idFoyer NOT IN (SELECT u.foyer.idFoyer FROM University u WHERE u.foyer IS NOT NULL)")
    List<String> findFoyersWithoutUniversity();
    @Query("select u.nomUniversity, count(c) from University u join u.foyer f join f.blocList b join b.chambres c group by u.nomUniversity")
    List<Object[]> countChambresForAllUniversities();

}
