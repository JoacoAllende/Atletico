import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Password;
  Usuario;

  constructor(public authService: AuthService, private router: Router, public globalService : GlobalService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(form: NgForm){
    const { value } = form;
    const { nombre, password } = value;
    if (nombre && password) {
      this.authService.loginUser(form.value).subscribe(res => {
        if (res.accessToken) {
          this.router.navigateByUrl('inicio');
          this.globalService.activo = true;
          this.resetForm(form);
        } else {
          this._snackBar.open('Usuario o contraseña incorrecta.', 'Cerrar', {
            duration: 3000
          }); 
        }
      })
    } else {
      this._snackBar.open('Formulario invalido.', 'Cerrar', {
        duration: 3000
      });   
    }
  }

  logout() {
    this.authService.logout();
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
  }

}