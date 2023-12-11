import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoyerRoutingModule } from './foyer-routing.module';
import { FoyerUpdateComponent } from './components/foyer-update/foyer-update.component';
import { FoyerListComponent } from './components/foyer-list/foyer-list.component';
import { CreateFoyerComponent } from './components/foyer-add/foyer-add.component';



@NgModule({
  declarations: [

    FoyerUpdateComponent,
    FoyerListComponent,
    CreateFoyerComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    FoyerRoutingModule
  ]
})
export class FoyerModule { }
