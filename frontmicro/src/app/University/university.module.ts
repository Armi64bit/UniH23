import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // If needed
import { UniversityRoutingModule } from './university-routing.module';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { UniTableDetailsComponent } from './uni-table-details/uni-table-details.component';
import { HighlightDirective } from '../highlight.directive';

@NgModule({
  declarations: [
    AllUniversitiesComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    UniversityDetailsComponent,
    UniTableDetailsComponent,
  
  ],
  imports: [CommonModule, FormsModule, UniversityRoutingModule,NgbModule,NgxPaginationModule,ReactiveFormsModule],

})
export class UniversityModule { }
