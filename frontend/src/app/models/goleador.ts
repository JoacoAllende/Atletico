export class Goleador {

    constructor(id, nombre, apellido, numero, goles, equipo, torneo, anio, id_equipo){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.goles = goles;
        this.equipo = equipo;
        this.torneo = torneo;
        this.anio = anio;
        this.id_equipo = id_equipo;
    }

    id: number;
    nombre: string;
    apellido: string;
    numero: number;
    goles: number;
    equipo: string;
    torneo: number;
    anio: number;
    id_equipo: number;
}