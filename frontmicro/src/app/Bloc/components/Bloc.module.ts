import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBlocsComponent } from './all-blocs/all-blocs.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { ModifyBlocComponent } from './modify-bloc/modify-bloc.component';
import { blocRoutingModule } from './bloc-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignToetudiantComponent } from './assign-toetudiant/assign-toetudiant.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AllBlocsComponent,
    CreateBlocComponent,
    ModifyBlocComponent,
    AssignToetudiantComponent,

  ],
  imports: [
    CommonModule ,FormsModule,blocRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,


  ]
})
export class ComponentsModule { }
