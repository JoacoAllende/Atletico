import { PipeTransform, Pipe } from '@angular/core';
import { Goleador } from 'src/app/models/goleador';

@Pipe({
    name: 'nombreFilter'
})
export class GoleadorFilterNombrePipe implements PipeTransform {
    transform(goleadores: Goleador[], busquedaNombre: string): Goleador[] {
        if (!goleadores || !busquedaNombre) {
            return goleadores;
        }
        return goleadores.filter(jugador => jugador.nombre.toLocaleLowerCase().indexOf(busquedaNombre.toLowerCase()) !== -1);
    }
}