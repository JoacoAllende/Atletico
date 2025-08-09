import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from 'src/app/models/noticia';
import { GlobalService } from 'src/app/services/global.service';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.css'],
    standalone: false
})
export class NoticiaComponent implements OnInit {

  subscriptionParam: Subscription;

    //NOTICIAS
    public noticiaObs: Observable<Noticia>;
    public noticia: Noticia = null;
    subscriptionNoticias: Subscription;
    public id: number;
    selectedImageFile: File | null = null;
    previewUrl: string | ArrayBuffer | null = null;
  
    constructor(public noticiasService : NoticiasService, public globals : GlobalService, private rutaActiva: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }
  
    ngOnInit() {
      this.subscriptionParam = this.rutaActiva .params.subscribe(
        (params: Params) => {
          this.id = this.rutaActiva.snapshot.params.id;
          this.noticiaObs = this.noticiasService.getNoticia(this.id).pipe(map(noticia => ({ ...noticia, url: `${this.globals.API_URI}/noticias/${noticia.imagen}` }) ));
          this.subscriptionNoticias = this.noticiaObs.subscribe(not => this.noticia = not);
        }
      );
    }

    getNoticiaImageUrl(filename: string): string {
      return `${this.globals.API_URI}/noticias/${filename}`;
    }

    updateNoticia(form: NgForm) {
      const { id, titulo, cuerpo, fecha } = form.value;

      if (id && titulo && cuerpo && fecha) {
        const formData = new FormData();

        formData.append('id', id);
        formData.append('titulo', titulo);
        formData.append('cuerpo', cuerpo);
        formData.append('fecha', fecha);

        if (this.selectedImageFile) {
          formData.append('imagen', this.selectedImageFile);
        }

        this.noticiasService.putNoticia(formData).subscribe(res => {
          this.resetForm(form);
          this.noticiaObs = this.noticiasService.getNoticia(this.id);
          this.noticiaObs.subscribe(not => this.noticia = not);
        });
      } else {
        this._snackBar.open('Formulario invalido.', 'Cerrar', {
          duration: 3000
        });
      }
    }


    resetForm(form?: NgForm){
      if(form){
        form.reset();
        this.noticiasService.selectedNoticia = new Noticia(null, null, null, null, null, null);
        this.previewUrl = null;
        this.selectedImageFile = null;
      }
    }

    editNoticia(noticia: Noticia){
      this.noticiasService.selectedNoticia = new Noticia(noticia.id, noticia.titulo, noticia.cuerpo, noticia.imagen, noticia.fecha, noticia.url);
      if (noticia.imagen) {
        this.previewUrl = `${this.globals.API_URI}/noticias/${noticia.imagen}`;
        this.selectedImageFile = null;
      }
    }
  
    deleteNoticia(id: number){
      if (confirm('Desea eliminar la noticia?')){
        this.noticiasService.deleteNoticia(id)
        .subscribe(res => {
          this.router.navigate(['/inicio']);
        })
      }
    }

    onImageSelected(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        this.selectedImageFile = fileInput.files[0];

        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(this.selectedImageFile);
      }
    }
  

}
