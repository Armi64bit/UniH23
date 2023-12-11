import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { FormsModule } from '@angular/forms';
import { AddetudiantComponent } from './components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './components/updateetudiant/updateetudiant.component';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';
import { HighlightDirective } from '../highlight.directive';
import { PointerHandDirective } from '../pointer-hand.directive';



@NgModule({
  declarations: [
AddetudiantComponent,
AlletudiantComponent,
UpdateetudiantComponent,
ReservationModalComponent,
HighlightDirective,
PointerHandDirective,


  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
