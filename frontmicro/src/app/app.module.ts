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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { EtudiantModule } from './Etudiant/etudiant.module';
import { StatisticetudiantComponent } from './Etudiant/components/statisticetudiant/statisticetudiant.component';
import { HighlightDirective } from './highlight.directive';
import { PointerHandDirective } from './pointer-hand.directive';
import { UniversityModule } from './University/university.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniversityStatisticsComponent } from './University/university-statistics/university-statistics.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReservationModule } from './Reservations/reservation.module';
import { FoyerModule } from './foyer/foyer.module';

@NgModule({
  declarations: [
    AppComponent,
    StatisticetudiantComponent,
    UniversityStatisticsComponent,
    HighlightDirective,







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
    EtudiantModule,
    UniversityModule,
    NgbModule,
    NgxPaginationModule,
    ReservationModule,




  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
