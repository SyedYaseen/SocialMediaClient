import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./_services/data.service";
import {User} from "./_models/User";
import {AccountService} from "./_services/login-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users: any;

  constructor(private dataService: DataService, public accountService: AccountService) {  }

  ngOnInit() {
    this.getCurrentUser();
    this.getUsers();
  }

  getCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(currentUser)
  }

  getUsers() {
    this.dataService.getUsers().subscribe({
      next: value => this.users = value,
      error: err => console.log(err.message)
    })
  }
}
