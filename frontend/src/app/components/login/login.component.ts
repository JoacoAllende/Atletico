import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Password;
  Usuario;

  constructor(public authService: AuthService, private router: Router, private globalService : GlobalService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    this.authService.loginUser(form.value).subscribe(res => {
      if (res.accessToken) {
        this.router.navigateByUrl('inicio');
        this.globalService.activo = true;
        this.resetForm(form);
      }
    })
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