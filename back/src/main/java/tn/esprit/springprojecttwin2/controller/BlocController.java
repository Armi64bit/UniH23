package tn.esprit.springprojecttwin2.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.TableGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Bloc;
import tn.esprit.springprojecttwin2.entites.Chambre;
import tn.esprit.springprojecttwin2.services.IBlocService;

import java.util.List;

@RestController
@RequestMapping("/bloc")
public class BlocController {
    @Autowired
    IBlocService blocService;

    @PostMapping("/add")
    public Bloc add(@RequestBody Bloc b){
        Bloc bloc = blocService.addBloc(b);
        return bloc;

    }
    @GetMapping("/all-blocs")
    public List<Bloc> getBlocs(){
        List<Bloc> listBlocs= blocService.AllBlocs();
        return listBlocs;
    }
    @GetMapping("/retrieve/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bcId){
        Bloc bloc = blocService.BlocById(bcId);
        return bloc;
    }
    @PutMapping("/modify")
    public Bloc modifyBloc(@RequestBody Bloc b){
        Bloc bloc = blocService.UpdateBloc(b);
        return bloc;
    }
    @DeleteMapping("/remove/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id")Long bcId){
        blocService.removeBloc(bcId);
    }

    @GetMapping("/{blocId}/chambres")
    @JsonIgnore
    public List<Chambre> getChambresByBlocId(@PathVariable Long blocId) {
        return blocService.getChambresByBlocId(blocId);
    }

}
