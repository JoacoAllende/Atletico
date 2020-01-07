export class Equipo {

    constructor(id, nombre, puntos, partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos, golesAFavor, golesEnContra, diferenciaGoles, grupo, posicion, cantAmarillas, cantRojas, torneo = 0, año = 2020){
        this.id = id;
        this.nombre = nombre;
        this.puntos = puntos;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.partidosEmpatados = partidosEmpatados;
        this.partidosPerdidos = partidosPerdidos;
        this.golesAFavor = golesAFavor;
        this.golesEnContra = golesEnContra;
        this.diferenciaGoles = diferenciaGoles;
        this.grupo = grupo;
        this.posicion = posicion;
        this.cantAmarillas = cantAmarillas;
        this.cantRojas = cantRojas;
        this.torneo = torneo;
        this.año = año;
    } 

    id: Number;
    nombre: String;
    puntos: Number;
    partidosJugados: Number;
    partidosGanados: Number;
    partidosEmpatados: Number;
    partidosPerdidos: Number;
    golesAFavor: Number;
    golesEnContra: Number;
    diferenciaGoles: Number;
    grupo: Number;
    posicion: Number;
    cantAmarillas: Number;
    cantRojas: Number;
    torneo: number;
    año: number;
}