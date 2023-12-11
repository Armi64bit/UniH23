package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;

import java.util.Set;

public interface ChambreRepository extends JpaRepository<Chambre, Long> {
    @Query("SELECT c.bloc FROM Chambre c WHERE c.idChambre = :idChambre")
    Bloc findBlocByChambreId(@Param("idChambre") long idChambre);
    Set<Chambre> findChambreByBloc_NomBlocContains(String blocname);
    Chambre findByNumeroChambre(long numeroChambre);

}
