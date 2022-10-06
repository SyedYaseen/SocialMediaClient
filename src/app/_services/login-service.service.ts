import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, ReplaySubject, Subject} from "rxjs";
import {User} from "../_models/User";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  baseUrl= 'https://localhost:5001/api/';
  currentUser = new ReplaySubject<User>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) { }

  loginRequest(loginDetails: any) {
    return this.http.post(this.baseUrl+'account/login', loginDetails).pipe(
        map((user: User) => {
          if(user){
              console.log(user);
            this.currentUser.next(user);
            localStorage.setItem('user', JSON.stringify(user));
          }
        })
    );}

    registerUser(registerDetails: any) {
      return this.http.post(this.baseUrl+'account/register', registerDetails).pipe(
          map((user: User)=> {
              if(user) {
                  console.log("user from register", user)
                  this.currentUser.next(user);
                  localStorage.setItem('user', JSON.stringify(user));
              }
          })
      )
    }

  logout() {
    this.currentUser.next(null);

    localStorage.removeItem('user');
  }

  setCurrentUser(user: User) {
      this.currentUser.next(user);
  }
}
