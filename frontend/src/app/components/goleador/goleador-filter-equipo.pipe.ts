import { PipeTransform, Pipe } from '@angular/core';
import { Goleador } from 'src/app/models/goleador';

@Pipe({
    name: 'equipoFilter',
    standalone: false
})
export class GoleadorFilterEquipoPipe implements PipeTransform {
    transform(goleadores: Goleador[], busquedaEquipo: string): Goleador[] {
        if (!goleadores || !busquedaEquipo) {
            return goleadores;
        }
        return goleadores.filter(jugador => jugador.equipo.toLocaleLowerCase().indexOf(busquedaEquipo.toLowerCase()) !== -1);
    }
}