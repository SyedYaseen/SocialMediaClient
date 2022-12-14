import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl= 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + 'users');
  }
}
