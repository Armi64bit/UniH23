import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AddFoyerComponent } from './components/add-foyer/add-foyer.component';
import { AllFoyerComponent } from './components/all-foyer/all-foyer.component';
import { DeleteFoyerComponent } from './components/delete-foyer/delete-foyer.component';
import { DetailsFoyerComponent } from './components/details-foyer/details-foyer.component';
import { UpdateFoyerComponent } from './components/update-foyer/update-foyer.component';
import { FoyerListComponent } from './components/foyer-list/foyer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddFoyerComponent,
    AllFoyerComponent,
    DeleteFoyerComponent,
    DetailsFoyerComponent,
    UpdateFoyerComponent,
    FoyerListComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
       { path: 'add', component: AddFoyerComponent },
       { path: 'all', component: AllFoyerComponent },
       { path: 'delete', component: DeleteFoyerComponent },
       { path: 'details', component: DetailsFoyerComponent },
       { path: 'update', component: UpdateFoyerComponent },
      { path: 'foyer-list', component: FoyerListComponent },
        ]),
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [AllFoyerComponent, DetailsFoyerComponent, UpdateFoyerComponent, DeleteFoyerComponent, FoyerListComponent]

})
export class FoyerModule { }
