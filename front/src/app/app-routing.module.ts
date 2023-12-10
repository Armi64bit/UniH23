import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { FormsModule } from '@angular/forms'; // Ensure this is imported
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';
import { StatisticetudiantComponent } from './Etudiant/components/statisticetudiant/statisticetudiant.component';

const routes: Routes = [
  { path: 'students/all', component: AlletudiantComponent },
  { path: 'students/add', component: AddetudiantComponent },
  { path: 'students/update/:id', component: UpdateetudiantComponent },
  { path: 'statistic/students', component: StatisticetudiantComponent },
  { path: 'alletudiant', loadChildren: () => import('./alletudiant/alletudiant.module').then(m => m.AlletudiantModule) },



  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
