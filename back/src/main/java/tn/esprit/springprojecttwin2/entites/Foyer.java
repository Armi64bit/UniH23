package tn.esprit.springprojecttwin2.entites;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString

public class Foyer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private  long idFoyer;
    private   String nomFoyer;
    private long capaciteFoyer;
    @OneToOne(mappedBy = "foyer") /* foyer 1-->1 universtie*//* mapped by soit f universite soit f foyer kifkif khater zouz 1 *//* => table d'association*/
    private Universite universite;
    @OneToMany (mappedBy = "foyer") /* foyer 1-->*bloc */
    private List<Bloc> blocList;

}
