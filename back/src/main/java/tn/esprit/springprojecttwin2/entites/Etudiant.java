package tn.esprit.springprojecttwin2.entites;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private long idEtudiant;
    private String nomEtudiant;
    private String prenomEtudiant;
    private long cin;
    private String ecole;
    @ManyToMany (mappedBy = "etudiants") /* etudiant *-->*reservation *//* mapped by soit f etudiant soit f reservation khater zouz * *//* => table d'association*/
    @JsonBackReference // This annotation helps prevent infinite recursion
    private List<Reservation> reservations;

    @Temporal (TemporalType.DATE)
        private Date dateNaissance;
}
