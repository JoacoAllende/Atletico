export class Noticia {

    constructor(url, titulo, fecha, cuerpo) {
        this.url = url;
        this.titulo = titulo;
        this.fecha = fecha;
        this.cuerpo = cuerpo;
    }

    url: string;
    titulo: string;
    fecha: Date;
    cuerpo: string;
}
