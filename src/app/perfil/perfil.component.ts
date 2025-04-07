import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  constructor(
    private service: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  email:string =''


  ngOnInit(): void {
    if(this.service.getLocal('token') == this.route.snapshot.params['email']){
      this.email = this.service.getLocal('token')
    } else {
      this.router.navigate(['login'])
    }
  }

  logout(){
    this.service.clearLocal()
    this.router.navigate(['login'])
  }

}
