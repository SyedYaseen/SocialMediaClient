import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../_models/User";
import {FormGroup} from "@angular/forms";
import {AccountService} from "../_services/login-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegistration = new EventEmitter();
  regsitrationDetails: any = {
    username: '',
    password: ''
  };

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.registerUser(this.regsitrationDetails).subscribe();
  }

  cancel() {
    this.cancelRegistration.emit(false);
    this.regsitrationDetails = {};
  }
}
