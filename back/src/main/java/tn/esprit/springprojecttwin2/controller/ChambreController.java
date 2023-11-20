package tn.esprit.springprojecttwin2.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.services.IChambreService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/chambre")
public class ChambreController {
    @Autowired
    IChambreService chambreService;
//http://localhost:8081/springProjectTwin2/chambre/all-chambres
    @GetMapping("/all-chambres")
    public List<Chambre> getChambres() {
        List<Chambre> listChambres = chambreService.AllChambres();
        return listChambres;
    }

    @GetMapping("/retrieve/{chambre-id}")
    public Chambre retrieveChambre(@PathVariable("chambre-id") Long chId) {
        Chambre chambre = chambreService.ChambreById(chId);
        return chambre;
    }
    @PostMapping("/add")
    public Chambre addChambre(@RequestBody Chambre c) {
        Chambre chambre = chambreService.addChambre(c);
        return chambre;
    }

    @DeleteMapping("/remove/{chambre-id}")
    public void removeChambre(@PathVariable("chambre-id") Long chId) {
        chambreService.removeChambre(chId);
    }

    @PutMapping("/modify")
    public Chambre modifyChambre(@RequestBody Chambre c) {
        Chambre chambre = chambreService.UpdateChambre(c);
        return chambre;
    }
    @GetMapping("/{chambreId}/bloc")
    public ResponseEntity<Bloc> getBlocByChambreId(@PathVariable long chambreId) {
        Bloc bloc = chambreService.getBlocByChambreId(chambreId);

        if (bloc != null) {
            return ResponseEntity.ok(bloc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
