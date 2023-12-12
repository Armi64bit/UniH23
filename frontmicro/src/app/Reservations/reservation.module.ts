import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationbackComponent } from './reservationback/reservationback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationfrontComponent } from './reservationfront/reservationfront.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AlertDirectiveDirective } from './alert-directive.directive';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ReservationbackComponent,
    ReservationfrontComponent,
    AffichageComponent,
    AlertDirectiveDirective,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReservationModule { }
