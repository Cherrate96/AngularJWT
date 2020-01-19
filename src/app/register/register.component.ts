import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any;
mode:number=0;
errorMessage:string;
  constructor(private  authService:AuthenticationService) { }

  ngOnInit() {
  }


  onRegister(user) {
    this.authService.register(user)
      .subscribe(data=>{
        this.user=data;
        this.mode=1;

      },err=>{
        this.errorMessage=err.error.message;
        this.mode=0;
    });
  }
}
