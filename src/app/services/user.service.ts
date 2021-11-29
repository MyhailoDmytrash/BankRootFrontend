import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/entities/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = '/user';

  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<void>
  {
    return this.http.post<void>(this.baseURL + '/registration', user);
  }

  public authentication(user: User): Observable<string>
  {
    return this.http.post<string>(this.baseURL, user);
  }
}
