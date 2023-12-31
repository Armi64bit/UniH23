package tn.esprit.springprojecttwin2.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.services.IFoyerService;

import java.util.List;


@RestController
@RequestMapping("/foyer")
public class FoyerController {
    @Autowired
    IFoyerService foyerService;

    //http://localhost:8081/springProjectTwin2/foyer/all
    @GetMapping("/all")
    public List<Foyer> getFoyers(){
        List<Foyer> listFoyers = foyerService.AllFoyers();
        return listFoyers;
    }

    @GetMapping("/retrieve/{foyer-id}")
    public Foyer retrieveFoyer(@PathVariable("foyer-id") Long fyId){
        Foyer foyer = foyerService.FoyerById(fyId);
        return foyer;
    }
    @PostMapping("/add")
    public Foyer addFoyer(@RequestBody Foyer f ){
        Foyer foyer = foyerService.addFoyer(f);
        return foyer;
    }
    @DeleteMapping("/remove/{foyer-id}")
    public void removeFoyer(@PathVariable("foyer-id")Long fyId){
        foyerService.removeFoyer(fyId);
    }

    @PutMapping("/modify")
    public Foyer modifyFoyer(@RequestBody Foyer f){
        Foyer foyer = foyerService.UpdateFoyer(f);
        return foyer;
    }
    // http://localhost:8081/springProjectTwin2/foyer/capacity/{capacity}
    @GetMapping("/capacity/{capacity}")
    public List<Foyer> getFoyersByCapacity(@PathVariable long capacity) {
        List<Foyer> listFoyers = foyerService.FoyersByCapacityGreaterThan(capacity);
        return listFoyers;
    }

    @GetMapping("/details/{foyer-id}")
    public ResponseEntity<Foyer> getFoyerDetails(@PathVariable("foyer-id") Long fyId) {
        Foyer foyer = foyerService.getFoyerDetails(fyId);
        if (foyer != null) {
            return new ResponseEntity<>(foyer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
