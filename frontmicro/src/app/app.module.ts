import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Remove this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlocsComponent } from './Bloc/components/all-blocs/all-blocs.component';
import { HttpClientModule } from '@angular/common/http';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';
import { DeleteetudiantComponent } from './Etudiant/components/deleteetudiant/deleteetudiant.component';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';
import { AddChambreComponent } from './Chambre/components/add-chambre/add-chambre.component';
import { AllChambreComponent } from './Chambre/components/all-chambre/all-chambre.component';
import { DeleteChambreComponent } from './Chambre/components/delete-chambre/delete-chambre.component';
import { UpdateChambreComponent } from './Chambre/components/update-chambre/update-chambre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { FoyerModule } from './foyer/foyer.module';
import { EtudiantModule } from './Etudiant/etudiant.module';
import { StatisticetudiantComponent } from './Etudiant/components/statisticetudiant/statisticetudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticetudiantComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),// Ensure FormsModule is here
    ReactiveFormsModule,
    FoyerModule,
    EtudiantModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
