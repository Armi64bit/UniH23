package tn.esprit.springprojecttwin2.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString


public class Bloc implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idBloc;
    private String nomBloc;
    private long capacityBloc;

    @ManyToOne
    private Foyer foyer;

    @OneToMany(mappedBy = "bloc", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Chambre> chambres;

    @ManyToMany
    @JoinTable(
            name = "bloc_etudiant",
            joinColumns = @JoinColumn(name = "bloc_id"),
            inverseJoinColumns = @JoinColumn(name = "etudiant_id")
    )
    private Set<Etudiant> etudiants;

}
