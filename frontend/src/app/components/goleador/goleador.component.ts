import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Goleador } from 'src/app/models/goleador';
import { GoleadorService } from 'src/app/services/goleador.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl, NgForm } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-goleador',
  templateUrl: './goleador.component.html',
  styleUrls: ['./goleador.component.css']
})
export class GoleadorComponent implements OnInit, OnDestroy {

  //GOLEADORES
  public goleadoresObs: Observable<Goleador[]>;
  public goleadores: Goleador[] = [];
  public equiposObs: Observable<{id: number, nombre: string, grupo: number}[]>;
  public equipos: {id: number, nombre: string, grupo: number}[] = [];
  subscriptionGoleadores: Subscription;
  subscriptionEquipos: Subscription;
  subscriptionParam: Subscription;
  //PAGINACIÓN
  actualPage : number = 1;
  //FILTRO PIPE
  busquedaApellido: string;
  busquedaNombre: string;
  busquedaEquipo: string;
  public anioGoleador: number;
  public torneoGoleador: number;
  public myControl = new FormControl();
  filteredOptions: Observable<{id: number, nombre: string, grupo: number}[]>;

  constructor(public goleadorService : GoleadorService, private rutaActiva: ActivatedRoute, public globals : GlobalService, private el: ElementRef, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.anioGoleador = this.rutaActiva.snapshot.params.año;
        this.torneoGoleador = this.rutaActiva.snapshot.params.torneo;
        this.goleadoresObs = this.goleadorService.getGoleadores(this.torneoGoleador, this.anioGoleador);
        this.subscriptionGoleadores = this.goleadoresObs.subscribe(gol => this.goleadores = gol);
        this.equiposObs = this.goleadorService.getEquipos(this.torneoGoleador, this.anioGoleador);
        this.subscriptionEquipos = this.equiposObs.subscribe(eq => this.equipos = eq);
      }
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): {id: number, nombre: string, grupo: number}[] {
    const filterValue = value.toLowerCase();
    return this.equipos.filter(({nombre}) => nombre.toLowerCase().includes(filterValue));
  }

  addGoleador(torneo, año, form : NgForm){
    const { value } = form;
    const { id, nombre, apellido, goles } = value;
    if (nombre && apellido && goles) {
      if (id == null){
        this.goleadorService.postGoleador(torneo, año, {...value, id_equipo: this.equipos.filter(eq => eq.nombre === this.myControl.value)[0].id })
        .subscribe(res => {
          this.resetForm(form);
          this.goleadoresObs = this.goleadorService.getGoleadores(torneo, año);
          this.goleadoresObs.subscribe(gol => this.goleadores = gol);
        })
      }
      else {
        this.goleadorService.putGoleador(torneo, año, {...value, id_equipo: this.equipos.filter(eq => eq.nombre === this.myControl.value)[0].id })
        .subscribe(res => {
          this.resetForm(form);
          this.goleadoresObs = this.goleadorService.getGoleadores(torneo, año);
          this.goleadoresObs.subscribe(gol => this.goleadores = gol);
        })
      }
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.myControl.setValue('');
      this.goleadorService.selectedGoleador = new Goleador(null, null, null, null, null, null, null, null);
    }
  }

  editGoleador(goleador: Goleador){
    this.myControl.setValue(this.equipos.filter(eq => eq.id === goleador.id_equipo)[0].nombre);
    this.goleadorService.selectedGoleador = new Goleador(goleador.id, goleador.nombre, goleador.apellido, goleador.goles, goleador.equipo, goleador.torneo, goleador.anio, goleador.id_equipo);
    this.el.nativeElement.querySelector('#goleadorForm').scrollIntoView({ behavior: 'smooth' });
  }

  deleteGoleador(id: number){
    if (confirm('Desea eliminar el goleador?')){
      this.goleadorService.deleteGoleador(id)
      .subscribe(res => {
        this.goleadoresObs.subscribe(gol => this.goleadores = gol);
      })
    }
  }

  ngOnDestroy() {
    this.subscriptionGoleadores.unsubscribe();
    this.subscriptionEquipos.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

}
