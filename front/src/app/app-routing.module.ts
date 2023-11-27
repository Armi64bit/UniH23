import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { FormsModule } from '@angular/forms'; // Ensure this is imported
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';
import { AllChambreComponent } from './Chambre/all-chambre/all-chambre.component';
import { AddChambreComponent } from './Chambre/add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './Chambre/update-chambre/update-chambre.component';
import { AllUniversitiesComponent } from './University/all-universities/all-universities.component';
import { AddUniversityComponent } from './University/add-university/add-university.component';
import { UpdateUniversityComponent } from './University/update-university/update-university.component';


const routes: Routes = [
  { path: 'students/all', component: AlletudiantComponent },
  { path: 'students/add', component: AddetudiantComponent },
  { path: 'students/update/:id', component: UpdateetudiantComponent },
  { path: 'chambre/all', component: AllChambreComponent },
  { path: 'chambre/add', component: AddChambreComponent },
  { path: 'chambre/update/:id', component: UpdateChambreComponent },
  { path: 'university/getAll', component: AllUniversitiesComponent  },
  { path: 'university/addUniversity', component: AddUniversityComponent },
  { path: 'university/updateUniversity/:id', component: UpdateUniversityComponent },


  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
