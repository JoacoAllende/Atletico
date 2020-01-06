import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleadorComponent } from './components/goleador/goleador.component';


const routes: Routes = [
  { path: 'goleadores/:torneo/:año', component: GoleadorComponent},
  { path: '**', redirectTo: 'goleadores/0/2019'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
