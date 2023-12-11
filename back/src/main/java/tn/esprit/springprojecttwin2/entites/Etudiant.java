package tn.esprit.springprojecttwin2.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString

public class Etudiant implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idEtudiqnt;
    private String nomet;
    private String prenomEtm;
    private long cin;
    private String ecole;
    @ManyToMany (mappedBy = "etudiants") /* etudiant *-->*reservation *//* mapped by soit f etudiant soit f reservation khater zouz * *//* => table d'association*/
    @JsonIgnore
    private List<Reservation> reservations;

    @Temporal (TemporalType.DATE)
        private Date dateNaissance;
}
