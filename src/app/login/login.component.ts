import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private service: LocalStorageService,
    private router: Router
  ) {}

  email:string = ''
  password:string = ''
  error:boolean = false

  onSubmit(){
    if(this.email =='admin@teste.com' && this.password == 'teste'){
      this.service.setLocal('token', this.email)
      this.router.navigate(['perfil', this.email])
    }else{
      this.error=true
    }
  }

}
