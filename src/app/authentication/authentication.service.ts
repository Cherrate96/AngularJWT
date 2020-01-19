import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private host2:string="http://localhost:8080";
jwt:string;
username:string;
roles:Array<string>=[];
  constructor(private http:HttpClient) { }


//http a été convertit en json,
  //observe:response plus la peine de récuperer en json
  login(data){
    return this.http.post(this.host2+"/login",data,{observe:'response'});
  }

  register(user){
    return this.http.post(this.host2+"/users",user);
  }
//Enregistrer le jwt dans le local storage
  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();

  }
  getTasks()
  {
    if(this.jwt==null) this.loadToken();
    return this.http.get(this.host2+"/tasks",{headers:new HttpHeaders(({'authorization':this.jwt}))});
  }
  parseJWT()
  {
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    //Récuperer le claim qui contient le jwt
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
  }
  isAdmin()
  {
    return this.roles.indexOf('ADMIN')>=0;

  }
  isUser()
  {
    return this.roles.indexOf('USER')>=0;

  }

  /*le menu s'afficher meme si le role est user
  mais le role s'afficher en fonction du role */
  isAuthenticated()
  {
    return this.roles && (this.isAdmin() || this.isUser());
  }

  loadToken() {
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');

    this.initParams();
  }

  initParams()
  {
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
