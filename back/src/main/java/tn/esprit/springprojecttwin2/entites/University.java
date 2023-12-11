package tn.esprit.springprojecttwin2.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString

public class University implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUniversity;
    private String nomUniversity;
    private String adresse;
    @OneToOne
    @JsonManagedReference
    private Foyer foyer;
}
