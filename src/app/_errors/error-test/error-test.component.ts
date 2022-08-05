import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.css']
})
export class ErrorTestComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/buggy/'
  validationErrors = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get500() {
    this.http.get(this.baseUrl+'server-error').subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message)
    })
  }

  get404Err() {
    this.http.get(this.baseUrl+'not-found').subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message)
    })
  }
  get401Err() {
    this.http.get(this.baseUrl+'auth').subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message)
    })
  }
  get400Err() {
    this.http.get(this.baseUrl+'bad-request').subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message)
    })
  }

  get400ValidationErr() {
    this.http.post('https://localhost:5001/api/account/register', {}).subscribe({
      next: value => console.log(value),
      error: err => this.validationErrors = err
    })
  }
}
