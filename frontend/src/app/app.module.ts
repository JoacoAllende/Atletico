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
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule, MatLegacyLabel as MatLabel } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
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