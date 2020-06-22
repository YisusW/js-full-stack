import { User } from './look-back.model';
import { HttpClient } from '@angular/common/http';
import { User as UserGitHub } from 'src/app/services/git-hub/git-hub.model';
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

  public deleteUset(id: string): Observable<void> {
    const url = `${this.baseUrl}/users/${id}`;

    return this.http.delete<void>(url);
  }

  public editUser(id: string, user: User): Observable<void> {
    const url = `${this.baseUrl}/users/${id}`;

    return this.http.put<void>(url, user);
  }

  public importUsers(users: Array<UserGitHub>): Observable<boolean>{
    const url = `${this.baseUrl}/users-import`;

    return this.http.post<boolean>(url, users);
  }
}
