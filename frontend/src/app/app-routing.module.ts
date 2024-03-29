import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoleadorComponent } from './components/goleador/goleador.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { CopaComponent } from './components/copa/copa.component';
import { LoginComponent } from './components/login/login.component';
import { VallaInvictaComponent } from './components/valla-invicta/valla-invicta.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { JugadoresPasadosComponent } from './components/jugadores-pasados/jugadores-pasados.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NoticiaComponent } from './components/noticia/noticia.component';


const routes: Routes = [
  { path: 'goleadores/:torneo/:año', component: GoleadorComponent},
  { path: 'grupos/:torneo/:año', component: GruposComponent},
  { path: 'copa/plata/:torneo/:año', component: CopaComponent},
  { path: 'copa/oro/:torneo/:año', component: CopaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'vallaInvicta/:torneo/:año', component: VallaInvictaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'tarjetas/:torneo/:año', component: TarjetasComponent },
  { path: 'jugadores', component: JugadoresPasadosComponent },
  { path: 'inicio', component: NoticiasComponent},
  { path: 'noticias/:id', component: NoticiaComponent},
  { path: 'coordinadores', component: ContactosComponent},
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
