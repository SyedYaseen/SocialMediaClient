import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users: any;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5000/users').subscribe({
      next: value => this.users = value,
      error: err => console.log(err.message)
    })
  }
}
