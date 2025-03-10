import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GruposService } from 'src/app/services/grupos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Partido } from 'src/app/models/partido';
import { UntypedFormControl, NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { EquipoService } from 'src/app/services/equipos.service';
import { map, startWith } from 'rxjs/operators';
import { Equipo } from 'src/app/models/equipo';
import { PartidosService } from 'src/app/services/partidos.service';
import { GoleadorService } from 'src/app/services/goleador.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html',
    styleUrls: ['./grupos.component.css'],
    standalone: false
})
export class GruposComponent implements OnInit, OnDestroy {

  //GRUPOS
  public gruposObs: Observable<Grupo[]>;
  public grupos: Grupo[] = [];
  //EQUIPOS
  public equiposObs: Observable<{nombre: string}[]>;
  public equipos: {nombre: string}[] = [];
  //PARTIDOS
  public equiposGrupoUnoObs: Observable<{id: number, nombre: string, grupo: number}[]>;
  public equiposGrupoUno: {id: number, nombre: string, grupo: number}[] = [];
  public equiposGrupoDosObs: Observable<{id: number, nombre: string, grupo: number}[]>;
  public equiposGrupoDos: {id: number, nombre: string, grupo: number}[] = [];
  public horariosObs: Observable<{hora: string}[]>;
  public horarios: {hora: string}[] = [];
  public canchasObs: Observable<{cancha: string}[]>;
  public canchas: {cancha: string}[] = [];
  subscription: Subscription;
  subscriptionEquipos: Subscription;
  subscriptionEquiposGrupoUno: Subscription;
  subscriptionEquiposGrupoDos: Subscription;
  subscriptionHorarios: Subscription;
  subscriptionCanchas: Subscription;
  subscriptionParam: Subscription;
  showResultadosForm: boolean = true;
  showEquiposForm: boolean = false;
  showPartidosForm: boolean = false;
  showInterzonalesForm: boolean = false;
  public anio: number;
  public torneo: number;
  diaPartido: string;
  fecha: Date = null;
  //PAGINACIÓN
  actualPage: number = 1;
   //FILTRO PIPE
   public myControl = new UntypedFormControl();
   public myControlEquiposGrupoUno = new UntypedFormControl();
   public myControlEquiposGrupoDos = new UntypedFormControl();
   public myControlHorarios = new UntypedFormControl();
   public myControlCanchas = new UntypedFormControl();
   filteredOptions: Observable<{nombre: string}[]>;
   filteredEquiposGrupoUno: Observable<{id: number, nombre: string, grupo: number}[]>;
   filteredEquiposGrupoDos: Observable<{id: number, nombre: string, grupo: number}[]>;
   filteredHorarios: Observable<{hora: string}[]>;
   filteredCanchas: Observable<{cancha: string}[]>;

  constructor(public gruposService: GruposService, public equiposService: EquipoService, public goleadorService: GoleadorService, public partidosService: PartidosService, private rutaActiva: ActivatedRoute, public globals: GlobalService, private el: ElementRef, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.anio = this.rutaActiva.snapshot.params.año;
        this.torneo = this.rutaActiva.snapshot.params.torneo;
        this.gruposObs = this.gruposService.getGrupos(this.torneo, this.anio);
        this.subscription = this.gruposObs.subscribe(gr => this.grupos = gr);
        this.equiposObs = this.equiposService.getEquipos();
        this.subscriptionEquipos = this.equiposObs.subscribe(eq => this.equipos = eq);
        this.equiposGrupoUnoObs = this.goleadorService.getEquipos(this.torneo, this.anio);
        this.subscriptionEquiposGrupoUno = this.equiposGrupoUnoObs.subscribe(eq => this.equiposGrupoUno = eq);
        this.equiposGrupoDosObs = this.goleadorService.getEquipos(this.torneo, this.anio);
        this.subscriptionEquiposGrupoDos = this.equiposGrupoDosObs.subscribe(eq => this.equiposGrupoDos = eq);
        this.horariosObs = this.partidosService.getHorarios();
        this.subscriptionHorarios = this.horariosObs.subscribe(h => this.horarios = h);
        this.canchasObs = this.partidosService.getCanchas();
        this.subscriptionCanchas = this.canchasObs.subscribe(c => this.canchas = c);
        //RESET FORMS
        this.gruposService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.equiposService.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.partidosService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
      }
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filteredEquiposGrupoUno = this.myControlEquiposGrupoUno.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEquiposGrupoUno(value)),
    );
    this.filteredEquiposGrupoDos = this.myControlEquiposGrupoDos.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEquiposGrupoDos(value)),
    );
    this.filteredHorarios = this.myControlHorarios.valueChanges.pipe(
      startWith(''),
      map(value => this._filterHorarios(value)),
    );
    this.filteredCanchas = this.myControlCanchas.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCanchas(value)),
    );
  }

  private _filter(value: string): {nombre: string}[] {
    const filterValue = value.toLowerCase();
    return this.equipos.filter(({nombre}) => nombre.toLowerCase().includes(filterValue));
  }

  private _filterEquiposGrupoUno(value: string): {id: number, nombre: string, grupo: number}[] {
    const filterValue = value.toLowerCase();
    return this.equiposGrupoUno.filter(({nombre}) => nombre.toLowerCase().includes(filterValue));
  }

  private _filterEquiposGrupoDos(value: string): {id: number, nombre: string, grupo: number}[] {
    const filterValue = value.toLowerCase();
    return this.equiposGrupoDos.filter(({nombre}) => nombre.toLowerCase().includes(filterValue));
  }

  private _filterHorarios(value: string): {hora: string}[] {
    const filterValue = value.toLowerCase();
    return this.horarios.filter(({hora}) => hora.includes(filterValue));
  }

  private _filterCanchas(value: string): {cancha: string}[] {
    const filterValue = value.toLowerCase();
    return this.canchas.filter(({cancha}) => cancha.toLowerCase().includes(filterValue));
  }

  onDateSelected(event: any): void {
    this.diaPartido = event.value;
  }

  private formatFecha(fecha: string): string{

    const fechaOriginal = new Date(typeof fecha === 'string' && fecha.split('-').length > 2 ? `${fecha}T00:00:00` : fecha);

    const año = fechaOriginal.getFullYear();
    const mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2);
    const dia = ("0" + fechaOriginal.getDate()).slice(-2);

    
    return `${año}-${mes}-${dia}`;
  }

  setShowResultadosForm() {
    this.showResultadosForm = true;
    this.showEquiposForm = false;
    this.showPartidosForm = false;
    this.showInterzonalesForm = false;
  }

  setShowEquiposForm() {
    this.showResultadosForm = false;
    this.showEquiposForm = true;
    this.showPartidosForm = false;
    this.showInterzonalesForm = false;
  }

  setShowPartidosForm() {
    this.showResultadosForm = false;
    this.showEquiposForm = false;
    this.showPartidosForm = true;
    this.showInterzonalesForm = false;
  }

  setShowInterzonalesForm() {
    this.showResultadosForm = false;
    this.showEquiposForm = false;
    this.showPartidosForm = false;
    this.showInterzonalesForm = true;
  }

  editForm(partido: Partido, grupo = null) {
    this.gruposService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio, partido.cancha, partido.dia);
    this.partidosService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio, partido.cancha, partido.dia);
    this.myControlEquiposGrupoUno.setValue(partido.equipoUno);
    this.myControlEquiposGrupoDos.setValue(partido.equipoDos);
    this.myControlCanchas.setValue(partido.cancha);
    this.myControlHorarios.setValue(new Date(partido.dia).toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires", hour12: false }).split(', ')[1]);
    this.fecha = new Date(partido.dia);
    this.diaPartido = this.formatFecha(this.fecha.toDateString());
    this.el.nativeElement.querySelector(this.showPartidosForm ? `#partidosForm${grupo}` : this.showInterzonalesForm ? '#partidosInterzonalesForm' : '#partidoForm').scrollIntoView({ behavior: 'smooth' });
  }

  editEquipoForm(equipo: Equipo) {
    this.myControl.setValue(equipo.nombre);
    this.equiposService.selectedEquipo = new Equipo(equipo.id, equipo.nombre, equipo.puntos, equipo.partidosJugados, equipo.partidosGanados, equipo.partidosEmpatados, equipo.partidosPerdidos, equipo.golesAFavor, equipo.golesEnContra, equipo.diferenciaGoles, equipo.grupo, equipo.posicion, equipo.cantAmarillas, equipo.cantRojas, equipo.torneo, equipo.año);
    this.el.nativeElement.querySelector('#equipoForm').scrollIntoView({ behavior: 'smooth' });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.gruposService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  resetEquipoForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.myControl.setValue('');
      this.equiposService.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  resetPartidoForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.myControlEquiposGrupoUno.setValue('');
      this.myControlEquiposGrupoDos.setValue('');
      this.myControlHorarios.setValue('');
      this.myControlCanchas.setValue('');
      this.fecha = null;
      this.partidosService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  editPartido(torneo, año, form: NgForm) {
    const { value } = form;
    const { golesLocal , golesVisitante } = value;
    if (golesLocal != null && golesVisitante != null ) {
      this.gruposService.putPartido(torneo, año, value)
        .subscribe(res => {
          this.resetForm(form);
          this.gruposObs = this.gruposService.getGrupos(torneo, año);
          this.gruposObs.subscribe(grup => this.grupos = grup);
        })
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  addEquipo(torneo, año, form : NgForm){
    const { value } = form;
    const { grupo } = value;
    if (grupo) {
      if (form.value.id_equipo == null){
        this.equiposService.postEquipo(torneo, año, {...value, nombre: this.myControl.value })
        .subscribe(res => {
          this.myControl.setValue('');
          this.resetEquipoForm(form);
          this.gruposObs = this.gruposService.getGrupos(torneo, año);
          this.gruposObs.subscribe(gr => this.grupos = gr);
          this.equiposGrupoUnoObs.subscribe(eq => this.equiposGrupoUno = eq);
          this.equiposGrupoDosObs.subscribe(eq => this.equiposGrupoDos = eq);
        })
      }
      else {
        this.equiposService.putEquipo(torneo, año, {...value, nombre: this.myControl.value })
        .subscribe(res => {
          this.resetForm(form);
          this.myControl.setValue('');
          this.gruposObs = this.gruposService.getGrupos(torneo, año);
          this.gruposObs.subscribe(gr => this.grupos = gr);
          this.equiposGrupoUnoObs.subscribe(eq => this.equiposGrupoUno = eq);
          this.equiposGrupoDosObs.subscribe(eq => this.equiposGrupoDos = eq);
        })
      }
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });  
    }
  }

  addPartido(torneo, año, grupo, form : NgForm){
    const { value } = form;
    const { id_partido } = value;
    const hasEquiposValid = this.equiposGrupoUno.filter(eq => eq.nombre === this.myControlEquiposGrupoUno.value).length > 0 && this.equiposGrupoDos.filter(eq => eq.nombre === this.myControlEquiposGrupoDos.value).length > 0 && this.myControlEquiposGrupoUno.value !== this.myControlEquiposGrupoDos.value;
    const validDia = this.diaPartido && this.myControlHorarios.value;
    const cancha = this.myControlCanchas.value;
    if (hasEquiposValid && validDia && cancha) {
      const id_equipoUno = this.equiposGrupoUno.filter(eq => eq.nombre === this.myControlEquiposGrupoUno.value)[0].id;
      const id_equipoDos = this.equiposGrupoDos.filter(eq => eq.nombre === this.myControlEquiposGrupoDos.value)[0].id;
      const dia = `${this.formatFecha(this.diaPartido)} ${this.myControlHorarios.value}`;
      if (id_partido == null){
        this.partidosService.postPartido(torneo, año, 
          {
            ...form.value, 
            id_equipoUno,
            id_equipoDos,
            id_grupo: grupo,
            instancia: grupo ? null : 'iz',
            dia,
            cancha,
           }
        )
        .subscribe(res => {
          this.myControlEquiposGrupoUno.setValue('');
          this.myControlEquiposGrupoDos.setValue('');
          this.myControlHorarios.setValue('');
          this.myControlCanchas.setValue('');
          this.fecha = null;
          this.resetPartidoForm(form);
          this.gruposObs = this.gruposService.getGrupos(torneo, año);
          this.gruposObs.subscribe(gr => this.grupos = gr);
        })
      }
      else {
        this.partidosService.putPartido(torneo, año,
          {
            ...form.value,
            id_partido,
            id_equipoUno,
            id_equipoDos,
            id_grupo: grupo,
            instancia: null,
            dia,
            cancha,
           }
          )
        .subscribe(res => {
          this.myControlEquiposGrupoUno.setValue('');
          this.myControlEquiposGrupoDos.setValue('');
          this.myControlHorarios.setValue('');
          this.myControlCanchas.setValue('');
          this.fecha = null;
          this.resetPartidoForm(form);
          this.gruposObs = this.gruposService.getGrupos(torneo, año);
          this.gruposObs.subscribe(gr => this.grupos = gr);
        })
      }
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  deleteEquipo(id: number){
    if (confirm('Desea eliminar el equipo?')){
      this.equiposService.deleteEquipo(id)
      .subscribe(res => {
        this.gruposObs.subscribe(gr => this.grupos = gr);
        this.equiposGrupoUnoObs.subscribe(eq => this.equiposGrupoUno = eq);
        this.equiposGrupoDosObs.subscribe(eq => this.equiposGrupoDos = eq);
      })
    }
  }

  deletePartido(id: number){
    if (confirm('Desea eliminar el partido?')){
      this.partidosService.deletePartido(id)
      .subscribe(res => {
        this.gruposObs.subscribe(gr => this.grupos = gr);
      })
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionEquipos.unsubscribe();
    this.subscriptionEquiposGrupoUno.unsubscribe();
    this.subscriptionEquiposGrupoDos.unsubscribe();
    this.subscriptionHorarios.unsubscribe();
    this.subscriptionCanchas.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

  hasElements(array) {
    return (typeof array != "undefined" && array != null && array.length != null
    && array.length > 0);
  }
}
