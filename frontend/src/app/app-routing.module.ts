import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleadorComponent } from './components/goleador/goleador.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { CopaComponent } from './components/copa/copa.component';


const routes: Routes = [
  { path: 'goleadores/:torneo/:año', component: GoleadorComponent},
  { path: 'grupos/:torneo/:año', component: GruposComponent},
  { path: 'copa/plata/:torneo/:año', component: CopaComponent},
  { path: 'copa/oro/:torneo/:año', component: CopaComponent},
  { path: '**', redirectTo: 'goleadores/0/2019'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
