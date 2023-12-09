import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChambreComponent } from './components/all-chambre/all-chambre.component';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './components/update-chambre/update-chambre.component';

const routes: Routes = [
  { path: 'all', component: AllChambreComponent },
  { path: 'add', component: AddChambreComponent },
  { path: 'update/:id', component: UpdateChambreComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChambreRoutingModule {}
