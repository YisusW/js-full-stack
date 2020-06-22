import { User } from './look-back.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookBackService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiLookBack;
  }

  public getUsers(): Observable<Array<User>> {
    const url = `${this.baseUrl}/users`;

    return this.http.get<Array<User>>(url);
  }

  public addUser(payloadUser: User): Observable<Array<User>> {
    const url = `${this.baseUrl}/users`;

    return this.http.post<Array<User>>(url, payloadUser);
  }
}