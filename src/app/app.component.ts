import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'FrontEnd-JWT';
  ngOnInit(): void {
    this.authenticationService.loadToken();
  }
constructor(private  authenticationService:AuthenticationService,
            private router:Router) {

}
  isAdmin()
  {
    return this.authenticationService.isAdmin();

  }
  isUser()
  {
    return this.authenticationService.isUser();
  }
isAuthenticated()
{
  return this.authenticationService.isAuthenticated();
}


  logOut() {
    this.authenticationService.logout();
  }

  onRegister() {
this.router.navigateByUrl("/register");
  }
}
