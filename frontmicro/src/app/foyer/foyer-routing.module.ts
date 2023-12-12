// foyer-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerListComponent } from './components/foyer-list/foyer-list.component';
import { AddFoyerComponent } from './components/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './components/update-foyer/update-foyer.component';

const routes: Routes = [
  { path: 'all', component: FoyerListComponent },
  { path: 'add', component: AddFoyerComponent },
  { path: 'update/:id', component: UpdateFoyerComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
