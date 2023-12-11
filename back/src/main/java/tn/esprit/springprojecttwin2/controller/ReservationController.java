package tn.esprit.springprojecttwin2.controller;


import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;
import org.hibernate.annotations.Parameter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.entites.Reservation;
import tn.esprit.springprojecttwin2.entites.TypeChambre;
import tn.esprit.springprojecttwin2.services.IReservationService;
import tn.esprit.springprojecttwin2.services.ReservationService;

import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/res")
//@Tag(name = "Reservation" , description = "Operations related to Reservation")
public class ReservationController {
    private final ObjectMapper objectMapper;
    private IReservationService ires ;
    private ReservationService res ;

    @CrossOrigin(origins = "http://localhost:4200")
    //@Operation(summary = "Add a new Reservation", description = "Adds a new Reservation to the system")
    @PostMapping("/add")
    public Reservation addReservation(@RequestBody  Reservation r) {
        //res.genererIdReservation(r, String.valueOf(r.getAnneeUniversitaire()));
        return ires.addReservation(r);

    }

    @CrossOrigin(origins = "http://localhost:4200")
  // @Operation(summary = "Update a Specific Reservation", description = "Update a specific Reservation to the system")
    @PutMapping("/update")
    public Reservation updateReservation(@RequestBody Reservation  r) {
        return ires.updateReservation(r);

    }



    @CrossOrigin(origins = "http://localhost:4200")
   // @Operation(summary = "Get all Reservation", description = "Gets a list of all Reservation in the system")
    @GetMapping("/getAll")
    public List<Reservation> findAllReservation() {
        return  ires.findAllReservation();
    }

    // @Operation(summary = "Get Reservation By a unique ID", description = "Get Reservation by his Id in the system")
    @GetMapping("/get/{idr}")
    public Reservation findById (@PathVariable String idr) {

        return  ires.findById(idr);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    //@Operation(summary = "Delete a Reservation by Id ", description = "Delete this specific Reservation by his ID ")
    @DeleteMapping("/delete/{idr}")
    public void deleteReservation( @PathVariable String idr){
        ires.deleteReservation(idr);

    }
    //@Operation(summary = "Get  Reservations by NomEtudiant ", description = "Get  Reservations by NomEtudiant")
    @GetMapping("/getResEt/{nom}")
    public List<Reservation> retrieveReservationsByEtudiantNom(@PathVariable String nom){
        return ires.retrieveReservationsByEtudiantNom(nom);
    }

    //   @Operation(summary = "Get  Reservations by Nom des Etudiants Commencant par :AB ", description = "Get  Reservations by Nom des Etudiants Commencant par :AB")
    @GetMapping("/getResNom")
    public List<Reservation> findByEtudiantsNomEtudiantStartingWithIgnoreCase(){
        return ires.findByEtudiantsNomEtudiantStartingWithIgnoreCase("AB");
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getEtudiant/{id}")
    public List<Etudiant> retrieveEtudiantsByIdReservation(@PathVariable String id){
        return ires.retrieveEtudiantsByIdReservation(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getChambre/{idReservation}")
    public Chambre findChambreByReservationIdReservation(@PathVariable String idReservation) {
        return ires.findChambreByReservationIdReservation(idReservation);

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/del/{idReservation}")
    public void DeleteRes(@PathVariable String idReservation){
        ires.DeleteRes(idReservation);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/assignToEtudiant/{id}/{num}")
    public Reservation assignEtudiantToReservation(@PathVariable String id , @PathVariable Long num) {
        return ires.assignEtudiantToReservation(id ,num);

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/assignToChambre/{id}/{num}")
    public Chambre assignChambreToReservation(@PathVariable String id, @PathVariable Long num){
        return ires.assignChambreToReservation(id ,num);
    }
    @DeleteMapping("/deleteChambre/{num}/{id}")
    public Chambre removeChambreFromReservation(@PathVariable long num , @PathVariable String id){
        return ires.removeChambreFromReservation(num ,id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deleteChambre2/{numeroChambre}/{idReservation}")
    public Chambre removeChambreFromReservation2(@PathVariable Long numeroChambre, @PathVariable String idReservation){
        return ires.removeChambreFromReservation2(numeroChambre , idReservation);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addAndAssignToChambre")
    public Reservation addReservationAndAssignToChambre(@RequestBody Map<String, Object> requestBody) {
        try {
            Reservation r = objectMapper.convertValue(requestBody.get("reservation"), Reservation.class);
            if (r == null) {
                throw new IllegalArgumentException("Le champ 'reservation' ne peut pas être null.");
            }

            Object numeroChambreObject = requestBody.get("numeroChambre");
            if (numeroChambreObject == null) {
                throw new IllegalArgumentException("Le champ 'numeroChambre' ne peut pas être null.");
            }

            Long numeroChambre = Long.valueOf(numeroChambreObject.toString());

            return ires.addReservationAndAssignToChambre2(r,numeroChambre).getBody();
        } catch (Exception e) {
            // Gérer les exceptions ici, par exemple, renvoyer une réponse d'erreur appropriée.
            e.printStackTrace(); // Vous devriez gérer cela de manière appropriée dans une application réelle.
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erreur lors du traitement de la requête.", e);
        }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getReservations/{cin}")
    public List<Reservation> findByEtudiant(@PathVariable long cin) {
        return ires.findByEtudiant(cin);
    }



}

