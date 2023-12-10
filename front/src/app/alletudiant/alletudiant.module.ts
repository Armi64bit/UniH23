// alletudiant.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AlletudiantComponent } from '../Etudiant/components/alletudiant/alletudiant.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservationModalComponent } from '../Etudiant/components/reservation-modal/reservation-modal.component';
console.warn("loading")
const routes: Routes = [
  
  { path: '', component: AlletudiantComponent }, // empty path route
];

@NgModule({
  declarations: [AlletudiantComponent, ReservationModalComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AlletudiantModule {}