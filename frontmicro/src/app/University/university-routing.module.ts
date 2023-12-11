import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';

const routes: Routes = [
  { path: 'getAll', component: AllUniversitiesComponent },
  { path: 'addUniversity', component: AddUniversityComponent },
  { path: 'updateUniversity/:id', component: UpdateUniversityComponent },
  { path: ':id', component: UniversityDetailsComponent },
  // Add other university routes as needed
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityRoutingModule { }
