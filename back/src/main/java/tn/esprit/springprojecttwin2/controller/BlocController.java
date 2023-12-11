package tn.esprit.springprojecttwin2.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.entites.Etudiant;
import tn.esprit.springprojecttwin2.repository.BlocRepository;
import tn.esprit.springprojecttwin2.services.IBlocService;

import java.util.List;


@RestController
@RequestMapping("/bloc")
public class BlocController {
    @Autowired
    IBlocService blocService;
    BlocRepository  BlocRepository;

    @PostMapping("/add")
    public Bloc add(@RequestBody Bloc b){
        Bloc bloc = blocService.addBloc(b);
        return bloc;

    }
    @GetMapping("/all")
    public ResponseEntity<List<Bloc>> getAllBlocs() {
        List<Bloc> listBlocs = blocService.AllBlocs();
        return new ResponseEntity<>(listBlocs, HttpStatus.OK);
    }
    @GetMapping("/retrieve/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bcId){
        Bloc bloc = blocService.BlocById(bcId);
        return bloc;
    }
  /*  @PutMapping("/modify")
    public Bloc modifyBloc(@RequestBody Bloc b){
        Bloc bloc = blocService.UpdateBloc(b);
        return bloc;
    }*/
  /*@PutMapping("/modify")
  public Bloc modifyBloc(@RequestBody Bloc b){
      return blocService.UpdateBloc(b);
  }*/


    @DeleteMapping("/remove/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id")Long bcId){
        blocService.removeBloc(bcId);
    }



    @GetMapping("/{blocId}/chambres")
    @JsonIgnore
    public List<Chambre> getChambresByBlocId(@PathVariable Long blocId) {
        return blocService.getChambresByBlocId(blocId);
    }

    @PostMapping("/{idBloc}/assignStudent/{idEtudiant}")
    public ResponseEntity<String> assignStudentToBloc(@PathVariable Long idBloc,
                                                      @PathVariable Long idEtudiant) {
        blocService.assignStudentToBloc(idEtudiant, idBloc);
        return ResponseEntity.ok("Etudiant assigné au bloc avec succès !");
    }


    @GetMapping("/students/assigned-to-blocks")
    public ResponseEntity<List<Etudiant>> getStudentsAssignedToBlocks() {
        List<Etudiant> students = blocService.getStudentsAssignedToBlocks();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
    @PutMapping("/updateBloc/{idBloc}")
    public ResponseEntity<Bloc> updateBloc(@RequestBody Bloc updatedBloc, @PathVariable long idBloc){
        Bloc existingBloc = blocService.BlocById(idBloc);
        if (existingBloc != null) {
            existingBloc.setNomBloc(updatedBloc.getNomBloc());
            existingBloc.setCapacityBloc(updatedBloc.getCapacityBloc());
            Bloc updatedBlocResult = blocService.UpdateBloc(existingBloc, idBloc);
            return ResponseEntity.ok(updatedBlocResult);
        } else {
            return ResponseEntity.notFound().build();
        }}}


