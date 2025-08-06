import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { GlobalService } from 'src/app/services/global.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.css'],
    standalone: false
})
export class NoticiasComponent implements OnInit {

  //NOTICIAS
  public noticiasObs: Observable<Noticia[]>;
  public noticias: Noticia[] = [];
  subscriptionNoticias: Subscription;
  selectedImageFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(public noticiasService : NoticiasService, public globals : GlobalService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(map(noticias => noticias.map(not => ({ ...not, url: `${this.globals.API_URI}/noticias/${not.imagen}` }))));
    this.subscriptionNoticias = this.noticiasObs.subscribe(not => this.noticias = not);
  }

  addNoticia(form: NgForm) {
    const { titulo, cuerpo, fecha } = form.value;

    if (titulo && cuerpo && fecha && this.selectedImageFile) {
      const formData = new FormData();

      formData.append('titulo', titulo);
      formData.append('cuerpo', cuerpo);
      formData.append('fecha', fecha);

      if (this.selectedImageFile) {
        formData.append('imagen', this.selectedImageFile);
      }

      this.noticiasService.postNoticia(formData).subscribe(res => {
        this.resetForm(form);
        this.noticiasObs = this.noticiasService.getNoticias();
        this.noticiasObs.subscribe(not => this.noticias = not);
      });
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });
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

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.noticiasService.selectedNoticia = new Noticia(null, null, null, null, null, null);
      this.previewUrl = null;
      this.selectedImageFile = null;
    }
  }

  ngOnDestroy() {
    this.subscriptionNoticias.unsubscribe();
  }

}
