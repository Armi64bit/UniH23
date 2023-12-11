package tn.esprit.springprojecttwin2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.TypeChambre;

import java.util.List;
import java.util.Set;

public interface BlocRepository extends JpaRepository <Bloc, Long> {
    @Query("SELECT c FROM Chambre c WHERE c.bloc.idBloc = :blocId")
    List<Chambre> findChambresByBlocId(@Param("blocId") Long blocId);
    List<Bloc> findByFoyer(Foyer foyer);
    public Set<Bloc> findBlocByChambresTypeC(TypeChambre typeC);



}
