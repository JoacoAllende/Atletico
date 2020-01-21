import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleadorComponent } from './components/goleador/goleador.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { CopaComponent } from './components/copa/copa.component';
import { LoginComponent } from './components/login/login.component';
import { VallaInvictaComponent } from './components/valla-invicta/valla-invicta.component';


const routes: Routes = [
  { path: 'goleadores/:torneo/:año', component: GoleadorComponent},
  { path: 'grupos/:torneo/:año', component: GruposComponent},
  { path: 'copa/plata/:torneo/:año', component: CopaComponent},
  { path: 'copa/oro/:torneo/:año', component: CopaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'vallaInvicta/:torneo/:año', component: VallaInvictaComponent },
  { path: '**', redirectTo: 'goleadores/0/2019'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
