export class Noticia {

    constructor(imagen, titulo, fecha, cuerpo) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.fecha = fecha;
        this.cuerpo = cuerpo;
    }

    imagen: string;
    titulo: string;
    fecha: Date;
    cuerpo: string;
}
