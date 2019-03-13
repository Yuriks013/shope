import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/Users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  usersUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) {
  }

  createUser(users: Users): Observable<Users> {
    return this.http.post<Users>(this.usersUrl, users);
  }
}
