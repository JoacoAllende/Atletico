import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoleadorComponent } from './components/goleador/goleador.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { GruposComponent } from './components/grupos/grupos.component';
import { CopaComponent } from './components/copa/copa.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLabel,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { LayoutModule } from '@angular/cdk/layout';
import { NavService } from './services/nav.service';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { VallaInvictaComponent } from './components/valla-invicta/valla-invicta.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { GoleadorFilterApellidoPipe } from './components/goleador/goleador-filter-apellido.pipe';
import { GoleadorFilterNombrePipe } from './components/goleador/goleador-filter-nombre.pipe';
import { GoleadorFilterEquipoPipe } from './components/goleador/goleador-filter-equipo.pipe';
import { HistoriaComponent } from './components/historia/historia.component';
import { JugadoresPasadosComponent } from './components/jugadores-pasados/jugadores-pasados.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { CanchasComponent } from './components/canchas/canchas.component';
import { InfoTorneoComponent } from './components/info-torneo/info-torneo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import localEs from "@angular/common/locales/es"
import { registerLocaleData  } from '@angular/common';
import { CarouselComponent } from './components/commons/carousel/carousel.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { CarouselNoticiasComponent } from './components/carousel-noticias/carousel-noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    GoleadorComponent,
    GruposComponent,
    CopaComponent,
    LoginComponent,
    MenuListItemComponent,
    TopNavComponent,
    VallaInvictaComponent,
    TarjetasComponent,
    GoleadorFilterApellidoPipe,
    GoleadorFilterNombrePipe,
    GoleadorFilterEquipoPipe,
    HistoriaComponent,
    JugadoresPasadosComponent,
    NoticiasComponent,
    ContactosComponent,
    CanchasComponent,
    InfoTorneoComponent,
    CarouselComponent,
    FooterComponent,
    CarouselNoticiasComponent,
    NoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatSnackBarModule,
  ],
  providers: [
    NavService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}