package tn.esprit.springprojecttwin2.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.repository.EtudiantRepository;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;


@Service
@AllArgsConstructor
public class EtudiantService implements IEtudiantService{
    @Autowired
    EtudiantRepository etudiantRep;

    private static final Logger LOGGER = LoggerFactory.getLogger(EtudiantService.class);

    @Override
    public List<Etudiant> AllEtudiants() {
        return etudiantRep.findAll();
    }

    @Override
    public Etudiant EtudiantById(Long id) {
        return etudiantRep.findById(id).get();
    }
    @Override
    public Etudiant addEtudiant(Etudiant b) {
        return etudiantRep.save(b);
    }

    @Override
    public void removeEtudiant(long id) {
        etudiantRep.deleteById(id);
    }

    @Override
    public Etudiant UpdateEtudiant(Etudiant b) {
        return etudiantRep.save(b);
    }

    public List<Etudiant> searchEtudiants(long cin) {
        return null;//etudiantRep.findByCin(cin); // Ensure this method is defined in your repository
    }

    @Override
    public List<Object[]> countStudentsByEcole(String school) {
        return etudiantRep.countStudentsByEcole(school);
    }

    @Override
    public List<Etudiant> advancedSearch(long cin, String nomEtudiant, String prenomEtudiant) {
        return etudiantRep.advancedSearch(cin, nomEtudiant, prenomEtudiant);
    }

    public List<Reservation> getReservationsForEtudiant(Long idEtudiant) {
        // Retrieve the Etudiant by id
        Etudiant etudiant = etudiantRep.findById(idEtudiant)
                .orElseThrow(() -> new EntityNotFoundException("Etudiant not found with id: " + idEtudiant));

        // Access the reservations for the Etudiant
        return etudiant.getReservations();
    }




    public int calculateEtudiantAge(Etudiant etudiant) {
        if (etudiant.getDateNaissance() == null) {
            LOGGER.error("Date of birth is null for Etudiant {}", etudiant.getIdEtudiant());
            return 0; // or handle the case when dateNaissance is null
        }

        // Convert java.sql.Date to java.util.Date
        Date sqlDate = etudiant.getDateNaissance();
        java.util.Date utilDate = new java.util.Date(sqlDate.getTime());

        // Convert java.util.Date to java.time.LocalDate
        LocalDate birthDate = utilDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate currentDate = LocalDate.now();
        LOGGER.info("Birth date for Etudiant {}: {}", etudiant.getIdEtudiant(), birthDate);

        try {
            Period period = Period.between(birthDate, currentDate);
            return period.getYears();
        } catch (Exception e) {
            LOGGER.error("Error calculating age for Etudiant {}", etudiant.getIdEtudiant(), e);
            return 0; // or handle the error case
        }
    }






}
