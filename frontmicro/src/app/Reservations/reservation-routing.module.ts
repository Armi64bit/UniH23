import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationbackComponent } from './reservationback/reservationback.component';
import { ReservationfrontComponent } from './reservationfront/reservationfront.component';
import { AffichageComponent } from './affichage/affichage.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path :'back' , component:ReservationbackComponent, children:[{path :'update/:id' ,component:UpdateComponent }]  },
  //{path :'update/:id' , component:updateComponent },
  {path :'front' ,component:ReservationfrontComponent, children:[{path :'affichage' ,component:AffichageComponent }] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
