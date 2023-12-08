package tn.esprit.springprojecttwin2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.services.IEtudiantService;
import tn.esprit.springprojecttwin2.services.ReservationService;

import java.util.List;

@RestController
@RequestMapping("/etudiant")
public class EtudiantController {
    @Autowired
    IEtudiantService etudiantService;
    ReservationService reservationService  ;


    //http://localhost:8081/springProjectTwin2/etudiant/all-etudiants
    @GetMapping("/all-etudiants")
    public List<Etudiant> getEtudiants(){
        List<Etudiant> listEtudiants = etudiantService.AllEtudiants();
        return listEtudiants;
    }

    @GetMapping("/retrieve/{etudiant-id}")
    public Etudiant retrieveEtudiant(@PathVariable("etudiant-id") Long edId){
        Etudiant etudiant = etudiantService.EtudiantById(edId);
        return etudiant;
    }

    @PostMapping("/add")
    public Etudiant addEtudiant(@RequestBody Etudiant e ){
        Etudiant etudiant = etudiantService.addEtudiant(e);
        return etudiant;
    }

    @DeleteMapping("/remove/{etudiant-id}")
    public void removeEtudiant(@PathVariable("etudiant-id")Long edId){
        etudiantService.removeEtudiant(edId);
    }

    @PutMapping("/modify")
    public Etudiant modifyEtudiant(@RequestBody Etudiant e){
        Etudiant etudiant = etudiantService.UpdateEtudiant(e);
        return etudiant;
    }
    @GetMapping("/search")
    public ResponseEntity<List<Etudiant>> searchEtudiants(@RequestParam long cin) {
        List<Etudiant> etudiants = etudiantService.searchEtudiants(cin);
        return ResponseEntity.ok(etudiants);
    }

    @GetMapping("/statistics/ecole")
    public List<Object[]> getStudentsByEcole(@RequestParam String school) {
        return etudiantService.countStudentsByEcole(school);
    }

    @GetMapping("/advancedSearch")
    public ResponseEntity<List<Etudiant>> advancedSearch(
            @RequestParam(name = "cin", defaultValue = "0") long cin,
            @RequestParam(name = "nomEtudiant", defaultValue = "") String nomEtudiant,
            @RequestParam(name = "prenomEtudiant", defaultValue = "") String prenomEtudiant) {

        // Log the received search criteria
        System.out.println("Received search criteria: cin=" + cin + ", nomEtudiant=" + nomEtudiant + ", prenomEtudiant=" + prenomEtudiant);

        // Your search logic here...

        List<Etudiant> searchResults = etudiantService.advancedSearch(cin, nomEtudiant, prenomEtudiant);

        // Log the search results
        System.out.println("Search results: " + searchResults);

        return ResponseEntity.ok(searchResults);
    }

    @GetMapping("/{idEtudiant}/reservations")
    public ResponseEntity<List<Reservation>> getReservationsForEtudiant(@PathVariable Long idEtudiant) {
        List<Reservation> reservations = etudiantService.getReservationsForEtudiant(idEtudiant);
        return ResponseEntity.ok(reservations);
    }

    @GetMapping("/{idEtudiant}/age")
    public ResponseEntity<String> getEtudiantAge(@PathVariable long idEtudiant) {
        try {
            // Assuming you have a method to retrieve an Etudiant by ID from the service
            Etudiant etudiant = etudiantService.EtudiantById(idEtudiant);

            // Check if etudiant is null
            if (etudiant == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Etudiant not found");
            }

            // Calculate and return the age
            int age = etudiantService.calculateEtudiantAge(etudiant);
            return ResponseEntity.ok("Age: " + age);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();

            // Return an error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error calculating age");
        }
    }



}
