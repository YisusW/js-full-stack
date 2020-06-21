import { User } from './git-hub.model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiGitHub;
  }

  public getUsers(): Observable<Array<User>> {
    const endPoint = `${this.baseUrl}/users`;

    return this.http.get<Array<User>>(endPoint);
  }
}
