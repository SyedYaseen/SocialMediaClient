import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../_services/login-service.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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

  constructor(public accountService: AccountService, private router: Router, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.loginRequest(this.loginForm.value).subscribe({
      next: data => {
        this.router.navigateByUrl('/members');
        this.toastrService.success("Login Success")
      },

      error: err => this.toastrService.error(err.error)
    })
  }

  logout() {
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }
}
