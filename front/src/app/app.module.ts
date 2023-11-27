import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Remove this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlocsComponent } from './Bloc/components/all-blocs/all-blocs.component';
import { HttpClientModule } from '@angular/common/http';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';
import { DeleteetudiantComponent } from './Etudiant/components/deleteetudiant/deleteetudiant.component';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';
import { AddChambreComponent } from './Chambre/add-chambre/add-chambre.component';
import { AllChambreComponent } from './Chambre/all-chambre/all-chambre.component';
import { DeleteChambreComponent } from './Chambre/delete-chambre/delete-chambre.component';
import { UpdateChambreComponent } from './Chambre/update-chambre/update-chambre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AllUniversitiesComponent } from './University/all-universities/all-universities.component';
import { AddUniversityComponent } from './University/add-university/add-university.component';
import { UpdateUniversityComponent } from './University/update-university/update-university.component';
import { DeleteUniversityComponent } from './University/delete-university/delete-university.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AllBlocsComponent,
    AlletudiantComponent,
    UpdateetudiantComponent,
    DeleteetudiantComponent,
    AddetudiantComponent,
    DeleteChambreComponent,
    UpdateChambreComponent,
    AddChambreComponent,
    AllChambreComponent,
    UpdateChambreComponent,
    AllUniversitiesComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    DeleteUniversityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgbModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
