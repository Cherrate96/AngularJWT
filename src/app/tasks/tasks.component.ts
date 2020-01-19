import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
public tasks:any;
  constructor(public authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
    this.authService.getTasks()
      .subscribe(data=>{
        this.tasks=data;
      },err=>{
console.log(err);
      })
  }

  onNewTask() {
    this.router.navigateByUrl("/new-task");
  }
}
