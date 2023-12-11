package tn.esprit.springprojecttwin2.controller;

//import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springprojecttwin2.entites.Foyer;
import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.services.FoyerService;
import tn.esprit.springprojecttwin2.services.UniversityServiceImp;
import tn.esprit.springprojecttwin2.entites.University;
import tn.esprit.springprojecttwin2.services.UniversityServiceImp;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/University")
@AllArgsConstructor
public class UniversityController {

    private UniversityServiceImp universityServiceImp;

    @PostMapping("/addUniversity")
    public  University addUniversity(@RequestBody University u) {
        return universityServiceImp.addUniversity(u);
    }

    @PutMapping("/updateUniversity")
    public University updateUniversity(@RequestBody University u) {
        return universityServiceImp.updateUniversity(u);
    }

    @GetMapping("/getAll")
    public List<University> findAllUniversity() {
        return universityServiceImp.findAllUniversity();
    }

    @GetMapping("/get/{idUniversity}")
    public University findById(@PathVariable long idUniversity) {
        return universityServiceImp.findById(idUniversity);
    }

    @DeleteMapping("/delete/{idUniversity}")
    public void deleteUniversity(@PathVariable long idUniversity) {
        universityServiceImp.deleteUniversity(idUniversity);
    }
    @PutMapping("/affectFoyer/{idFoyer}/{nomUniversity}")
   public  University affecterFoyerAUniversity(@PathVariable("idFoyer") long idFoyer,
                                        @PathVariable("nomUniversity") String nomUniversity){
        return  universityServiceImp.affecterFoyerAUniversity(idFoyer,nomUniversity);
    }

    @PutMapping("/desaffectFoyer/{idUniversity}")
    public University desaffecterFoyerAUniversity(@PathVariable("idUniversity") long idUniversity){
        return  universityServiceImp.desaffecterFoyerAUniversity(idUniversity);
    }

    @GetMapping("/search/{nomUniversity}")
    public  University findByNom(@PathVariable("nomUniversity") String nomUniversity){
        return universityServiceImp.getByNomUniversity(nomUniversity);
    }
    @GetMapping("/searchbyFoyer/{nomFoyer}")
    University  getUniversityByNomFoyer(@PathVariable String nomFoyer) {
        return universityServiceImp.getUniversityByNomFoyer(nomFoyer);

    }

    @GetMapping("/searchbyAdresseUnivers/{adresse}")
    List<University> selectByAdresse(@PathVariable("adresse") String adresse){
        return  universityServiceImp.getByAdresse(adresse);
    }

    @GetMapping("/{nomUniversity}/statnombreTotalChambres")
    Long getNombreTotalChambres(@PathVariable String nomUniversity) {
        Long nombreTotalChambres = universityServiceImp.getNombreTotalChambresByNomUniversity(nomUniversity);
        return  nombreTotalChambres ;
    }

    @GetMapping("/nombreMinChambres/{nombreMinChambres}")
    List<University> findByNombreMinChambres(@PathVariable int nombreMinChambres) {
        List<University> universities = universityServiceImp.getByNombreMinChambres(nombreMinChambres);
        return universities ;
    }

    @GetMapping("/foyersWithoutUniversity")
    List<String> getFoyersWithoutUniversity() {
        return universityServiceImp.findFoyersWithoutUniversity();
    }

    @GetMapping("/statNombreTotalChambresForAll")
    public Map<String, Long> getNombreTotalChambresForAll() {
        return universityServiceImp.getNombreTotalChambresForAllUniversities();
    }

}
