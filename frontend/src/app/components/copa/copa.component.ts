import { Component, OnInit, OnDestroy, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Instancia } from 'src/app/models/instancia';
import { CopaService } from 'src/app/services/copa.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { UntypedFormControl, NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { EquipoService } from 'src/app/services/equipos.service';
import { GoleadorService } from 'src/app/services/goleador.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-copa',
    templateUrl: './copa.component.html',
    styleUrls: ['./copa.component.css'],
    standalone: false
})
export class CopaComponent implements OnInit, OnDestroy {
  @Input() copaText!: string;
  @Output() hayPartidosChange = new EventEmitter<boolean>();

  //INSTANCIAS
  public copaObs: Observable<Instancia[]>;
  public copa: Instancia[] = [];
  subscription: Subscription;
  subscriptionParam: Subscription;
  showResultadosForm: boolean = true;
  showPartidosForm: boolean = false;
  //PARTIDOS
  public hayPartidos: boolean = false;
  public equiposGrupoUnoObs: Observable<{id: number, nombre: string, grupo: number}[]>;
  public equiposGrupoUno: {id: number, nombre: string, grupo: number}[] = [];
  public equiposGrupoDosObs: Observable<{id: number, nombre: string, grupo: number}[]>;
  public equiposGrupoDos: {id: number, nombre: string, grupo: number}[] = [];
  public horariosObs: Observable<{hora: string}[]>;
  public horarios: {hora: string}[] = [];
  public canchasObs: Observable<{cancha: string}[]>;
  public canchas: {cancha: string}[] = [];
  public instanciasObs: Observable<{instancia: string}[]>;
  public instancias: {instancia: string}[] = [];
  subscriptionEquiposGrupoUno: Subscription;
  subscriptionEquiposGrupoDos: Subscription;
  subscriptionHorarios: Subscription;
  subscriptionCanchas: Subscription;
  subscriptionInstancias: Subscription;
  public anio: number;
  public torneo: number;
  diaPartido: string;
  fecha: Date = null;
  //FILTRO PIPE
  public myControlEquiposGrupoUno = new UntypedFormControl();
  public myControlEquiposGrupoDos = new UntypedFormControl();
  public myControlHorarios = new UntypedFormControl();
  public myControlCanchas = new UntypedFormControl();
  public myControlInstancias = new UntypedFormControl();
  filteredEquiposGrupoUno: Observable<{id: number, nombre: string, grupo: number}[]>;
  filteredEquiposGrupoDos: Observable<{id: number, nombre: string, grupo: number}[]>;
  filteredHorarios: Observable<{hora: string}[]>;
  filteredCanchas: Observable<{cancha: string}[]>;
  filteredInstancias: Observable<{instancia: string}[]>;

  constructor(public copaService : CopaService, public equiposService: EquipoService, public goleadorService: GoleadorService, public partidosService: PartidosService, private rutaActiva : ActivatedRoute, private router: Router, public globals: GlobalService, private el: ElementRef, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.anio = this.rutaActiva.snapshot.params.año;
        this.torneo = this.rutaActiva.snapshot.params.torneo;
        this.copaObs = this.copaService.getInstancias(this.copaText, this.torneo, this.anio);
        this.subscription = this.copaObs.subscribe(cp => {
          this.copa = cp;
          this.hayPartidos = this.copa.some(instancia => instancia[1] && instancia[1].length > 0);
          this.hayPartidosChange.emit(this.hayPartidos);
        });
        this.equiposGrupoUnoObs = this.goleadorService.getEquipos(this.torneo, this.anio);
        this.subscriptionEquiposGrupoUno = this.equiposGrupoUnoObs.subscribe(eq => this.equiposGrupoUno = eq);
        this.equiposGrupoDosObs = this.goleadorService.getEquipos(this.torneo, this.anio);
        this.subscriptionEquiposGrupoDos = this.equiposGrupoDosObs.subscribe(eq => this.equiposGrupoDos = eq);
        this.horariosObs = this.partidosService.getHorarios();
        this.subscriptionHorarios = this.horariosObs.subscribe(h => this.horarios = h);
        this.canchasObs = this.partidosService.getCanchas();
        this.subscriptionCanchas = this.canchasObs.subscribe(c => this.canchas = c);
        this.instanciasObs = this.partidosService.getInstancias();
        this.subscriptionInstancias = this.instanciasObs.subscribe(i => this.instancias = i);
        //RESET FORMS
        this.copaService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
      }
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
    this.filteredInstancias = this.myControlInstancias.valueChanges.pipe(
      startWith(''),
      map(value => this._filterInstancias(value)),
    );
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

  private _filterInstancias(value: string): {instancia: string}[] {
    const filterValue = value.toLowerCase();
    return this.instancias.filter(({instancia}) => instancia.toLowerCase().includes(filterValue));
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
    this.showPartidosForm = false;
  }

  setShowPartidosForm() {
    this.showResultadosForm = false;
    this.showPartidosForm = true;
  }

  editForm(partido: Partido) {
    this.copaService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio, partido.cancha, partido.dia);
    this.partidosService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio, partido.cancha, partido.dia);
    this.myControlEquiposGrupoUno.setValue(partido.equipoUno);
    this.myControlEquiposGrupoDos.setValue(partido.equipoDos);
    this.myControlCanchas.setValue(partido.cancha);
    this.myControlInstancias.setValue(partido.instancia);
    this.myControlHorarios.setValue(new Date(partido.dia).toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires", hour12: false }).split(', ')[1]);
    this.fecha = new Date(partido.dia);
    this.diaPartido = this.formatFecha(this.fecha.toDateString());
    this.el.nativeElement.querySelector(this.showResultadosForm ? '#partidosForm' : '#partidosInterzonalesForm').scrollIntoView({ behavior: 'smooth' });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.copaService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  editPartido(torneo, año, form : NgForm){
    const copa = this.router.url.split('/')[2];
    const { value } = form;
    const { golesLocal , golesVisitante, penalesLocal, penalesVisitante } = value;
    if (golesLocal != null && golesVisitante != null && penalesLocal != null && penalesVisitante != null ) {
      this.copaService.putPartido(copa, torneo, año, value)
      .subscribe(res => {
        this.resetForm(form);
          this.copaObs = this.copaService.getInstancias(copa, torneo, año);
          this.copaObs.subscribe(inst => this.copa = inst);
      })
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  resetPartidoForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.myControlEquiposGrupoUno.setValue('');
      this.myControlEquiposGrupoDos.setValue('');
      this.myControlHorarios.setValue('');
      this.myControlCanchas.setValue('');
      this.myControlInstancias.setValue('');
      this.fecha = null;
      this.partidosService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  addPartido(torneo, año, grupo, form : NgForm){
    const copa = this.router.url.split('/')[2];
    const { value } = form;
    const { id_partido } = value;
    const hasEquiposValid = this.equiposGrupoUno.filter(eq => eq.nombre === this.myControlEquiposGrupoUno.value).length > 0 && this.equiposGrupoDos.filter(eq => eq.nombre === this.myControlEquiposGrupoDos.value).length > 0 && this.myControlEquiposGrupoUno.value !== this.myControlEquiposGrupoDos.value;
    const instancia = this.myControlInstancias.value;
    const validDia = this.diaPartido && this.myControlHorarios.value;
    const cancha = this.myControlCanchas.value;
    if (hasEquiposValid && instancia && validDia && cancha) {
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
            instancia,
            dia,
            cancha,
           }
        )
        .subscribe(res => {
          this.myControlEquiposGrupoUno.setValue('');
          this.myControlEquiposGrupoDos.setValue('');
          this.myControlHorarios.setValue('');
          this.myControlCanchas.setValue('');
          this.myControlInstancias.setValue('');
          this.fecha = null;
          this.resetPartidoForm(form);
          this.copaObs = this.copaService.getInstancias(copa, torneo, año);
          this.copaObs.subscribe(inst => this.copa = inst);
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
            instancia,
            dia,
            cancha,
           }
          )
        .subscribe(res => {
          this.myControlEquiposGrupoUno.setValue('');
          this.myControlEquiposGrupoDos.setValue('');
          this.myControlHorarios.setValue('');
          this.myControlCanchas.setValue('');
          this.myControlInstancias.setValue('');
          this.fecha = null;
          this.resetPartidoForm(form);
          this.copaObs = this.copaService.getInstancias(copa, torneo, año);
          this.copaObs.subscribe(inst => this.copa = inst);
        })
      }
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  deletePartido(id: number){
    if (confirm('Desea eliminar el partido?')){
      this.partidosService.deletePartido(id)
      .subscribe(res => {
        this.copaObs.subscribe(inst => this.copa = inst);
      })
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionEquiposGrupoUno.unsubscribe();
    this.subscriptionEquiposGrupoDos.unsubscribe();
    this.subscriptionHorarios.unsubscribe();
    this.subscriptionCanchas.unsubscribe();
    this.subscriptionInstancias.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

}
