import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Ensure this is imported
import { UniversityStatisticsComponent } from './University/university-statistics/university-statistics.component';

const routes: Routes = [

  { path: 'chambre', loadChildren: () => import('./Chambre/chambre.module').then(m => m.ChambreModule) },
  { path: 'bloc', loadChildren: () => import('./Bloc/components/Bloc.module').then(m => m.ComponentsModule) },
  { path: 'foyer', loadChildren: () => import('./foyer/foyer.module').then(m => m.FoyerModule) },
  { path: 'students', loadChildren: () => import('./Etudiant/etudiant.module').then(m => m.EtudiantModule) },
  {
    path: 'university',
    loadChildren: () => import('./University/university.module').then(m => m.UniversityModule),
  },
  { path: 'University/statistics', component: UniversityStatisticsComponent },
  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
