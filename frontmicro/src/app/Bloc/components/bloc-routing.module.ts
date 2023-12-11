import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlocsComponent } from './all-blocs/all-blocs.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { ModifyBlocComponent } from './modify-bloc/modify-bloc.component';
import { AssignToetudiantComponent } from './assign-toetudiant/assign-toetudiant.component';

const routes: Routes = [
  { path: 'all', component: AllBlocsComponent },
  { path: 'add', component: CreateBlocComponent },
  { path: 'update/:idBloc', component: ModifyBlocComponent },
  { path: 'assign-to-etudiant', component: AssignToetudiantComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class blocRoutingModule {}
