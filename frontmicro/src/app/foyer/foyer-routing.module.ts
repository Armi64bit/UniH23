// foyer-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerListComponent } from './components/foyer-list/foyer-list.component';
import { FoyerUpdateComponent } from './components/foyer-update/foyer-update.component';
import { CreateFoyerComponent } from './components/foyer-add/foyer-add.component';

const routes: Routes = [
  { path: 'all', component: FoyerListComponent },
  { path: 'add', component: CreateFoyerComponent },
  { path: 'update/:id', component: FoyerUpdateComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
