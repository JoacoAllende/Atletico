export class Partido {

    constructor(id_partido, id_equipoUno, id_equipoDos, golesLocal, golesVisitante, penalesLocal = -1, penalesVisitante = -1, id_grupo, instancia, equipoUno, equipoDos, torneo = 0, anio = 2020, cancha, dia, orden){
        this.id_partido = id_partido;
        this.id_equipoUno = id_equipoUno;
        this.id_equipoDos = id_equipoDos;
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
        this.penalesLocal = penalesLocal;
        this.penalesVisitante = penalesVisitante;
        this.id_grupo = id_grupo;
        this.instancia = instancia;
        this.equipoUno = equipoUno;
        this.equipoDos = equipoDos;
        this.torneo = torneo;
        this.anio = anio;
        this.cancha = cancha;
        this.dia = dia;
        this.orden = orden;
    } 

    id_partido: Number;
    id_equipoUno: Number;
    id_equipoDos: Number;
    golesLocal: Number;
    golesVisitante: Number;
    penalesLocal: number;
    penalesVisitante: number;
    id_grupo: Number;
    instancia: String;
    equipoUno: String;
    equipoDos: String;
    torneo: number;
    anio: number;
    cancha: string;
    dia: string;
    orden: number;
}