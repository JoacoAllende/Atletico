import { PipeTransform, Pipe } from '@angular/core';
import { Goleador } from 'src/app/models/goleador';

@Pipe({
    name: 'apellidoFilter',
    standalone: false
})
export class GoleadorFilterApellidoPipe implements PipeTransform {
    transform(goleadores: Goleador[], busquedaApellido: string): Goleador[] {
        if (!goleadores || !busquedaApellido) {
            return goleadores;
        }
        return goleadores.filter(jugador => jugador.apellido.toLocaleLowerCase().indexOf(busquedaApellido.toLowerCase()) !== -1);
    }
}