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

public class Reservation implements Serializable {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String idReservation;
    @Temporal(TemporalType.DATE)
    private Date annerUniversitaire;
    private boolean estValide;
    @ManyToMany
    @JsonIgnore
    private List<Etudiant> etudiants;
}
