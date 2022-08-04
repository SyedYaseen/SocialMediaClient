import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../_services/login-service.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.loginRequest(this.loginForm.value).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => console.log(err.message)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
