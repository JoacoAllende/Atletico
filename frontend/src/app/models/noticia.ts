export class Noticia {

    constructor(id, titulo, cuerpo, imagen, fecha, url) {
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
        this.fecha = fecha;
        this.cuerpo = cuerpo;
        this.url = url;
    }

    id: number;
    titulo: string;
    cuerpo: string;
    imagen: string;
    fecha: Date;
    url: string;
}
