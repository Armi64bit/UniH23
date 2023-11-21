package tn.esprit.springprojecttwin2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.services.IEtudiantService;

import java.util.List;

@RestController
@RequestMapping("/etudiant")
public class EtudiantController {
    @Autowired
    IEtudiantService etudiantService;

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
}
