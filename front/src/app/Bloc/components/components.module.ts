import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBlocsComponent } from './all-blocs/all-blocs.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { ModifyBlocComponent } from './modify-bloc/modify-bloc.component';


@NgModule({
  declarations: [
    AllBlocsComponent,
    CreateBlocComponent,
    ModifyBlocComponent,
 
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
