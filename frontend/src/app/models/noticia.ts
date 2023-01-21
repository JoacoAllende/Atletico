export class Noticia {

    constructor(id, titulo, cuerpo, imagen, fecha) {
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
        this.fecha = fecha;
        this.cuerpo = cuerpo;
    }

    id: number;
    titulo: string;
    cuerpo: string;
    imagen: string;
    fecha: Date;
}
