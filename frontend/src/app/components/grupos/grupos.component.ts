import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GruposService } from 'src/app/services/grupos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Partido } from 'src/app/models/partido';
import { FormControl, NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { EquipoService } from 'src/app/services/equipos.service';
import { map, startWith } from 'rxjs/operators';
import { Equipo } from 'src/app/models/equipo';
import { PartidosService } from 'src/app/services/partidos.service';
import { GoleadorService } from 'src/app/services/goleador.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
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
  subscription: Subscription;
  subscriptionEquipos: Subscription;
  subscriptionEquiposGrupoUno: Subscription;
  subscriptionEquiposGrupoDos: Subscription;
  subscriptionHorarios: Subscription;
  subscriptionParam: Subscription;
  showEquiposForm: boolean = false;
  public anio: number;
  public torneo: number;
  //PAGINACIÓN
  actualPage: number = 1;
   //FILTRO PIPE
   public myControl = new FormControl();
   public myControlEquiposGrupoUno = new FormControl();
   public myControlEquiposGrupoDos = new FormControl();
   public myControlHorarios = new FormControl();
   filteredOptions: Observable<{nombre: string}[]>;
   filteredEquiposGrupoUno: Observable<{id: number, nombre: string, grupo: number}[]>;
   filteredEquiposGrupoDos: Observable<{id: number, nombre: string, grupo: number}[]>;
   filteredHorarios: Observable<{hora: string}[]>;

  constructor(public gruposService: GruposService, public equiposService: EquipoService, public goleadorService: GoleadorService, public partidosService: PartidosService, private rutaActiva: ActivatedRoute, public globals: GlobalService) { }

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

  setShowEquiposForm() {
    this.showEquiposForm = !this.showEquiposForm;
  }

  setActive() {
    this.globals.activo = true;
  }

  editForm(partido: Partido) {
    this.gruposService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio);
  }

  editEquipoForm(equipo: Equipo) {
    this.myControl.setValue(equipo.nombre);
    this.equiposService.selectedEquipo = new Equipo(equipo.id, equipo.nombre, equipo.puntos, equipo.partidosJugados, equipo.partidosGanados, equipo.partidosEmpatados, equipo.partidosPerdidos, equipo.golesAFavor, equipo.golesEnContra, equipo.diferenciaGoles, equipo.grupo, equipo.posicion, equipo.cantAmarillas, equipo.cantRojas, equipo.torneo, equipo.año);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.gruposService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  resetEquipoForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.equiposService.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  editPartido(torneo, año, form: NgForm) {
    this.gruposService.putPartido(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.gruposObs = this.gruposService.getGrupos(torneo, año);
        this.gruposObs.subscribe(grup => this.grupos = grup);
      })
  }

  addEquipo(torneo, año, form : NgForm){
    if (form.value.id_equipo == null){
      this.equiposService.postEquipo(torneo, año, {...form.value, nombre: this.myControl.value })
      .subscribe(res => {
        this.myControl.setValue('');
        this.resetEquipoForm(form);
        this.gruposObs = this.gruposService.getGrupos(torneo, año);
        this.gruposObs.subscribe(gr => this.grupos = gr);
      })
    }
    else {
      this.equiposService.putEquipo(torneo, año, {...form.value, nombre: this.myControl.value })
      .subscribe(res => {
        this.resetForm(form);
        this.myControl.setValue('');
        this.gruposObs = this.gruposService.getGrupos(torneo, año);
        this.gruposObs.subscribe(gr => this.grupos = gr);
      })
    }
  }

  deleteEquipo(id: number){
    if (confirm('Desea eliminar el equipo?')){
      this.equiposService.deleteEquipo(id)
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
    this.subscriptionParam.unsubscribe();
  }

  hasElements(array) {
    return (typeof array != "undefined" && array != null && array.length != null
    && array.length > 0);
  }
}
