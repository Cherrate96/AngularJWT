import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mode=0;
  name: string;
  username: string;
  password: string;

  constructor(private  router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(data) {

    this.authenticationService.login(data)
      .subscribe(resp=>{
        let jwt=resp.headers.get('Authorization');
        this.authenticationService.saveToken(jwt);
        this.router.navigateByUrl("/tasks");
      },err=>{
        console.log(err);
        this.mode=1;
      });
  }


}
