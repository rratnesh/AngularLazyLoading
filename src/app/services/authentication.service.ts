import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  private subject = new Subject<any>();

  sendUser(user: any) {
    this.subject.next(user);
  }

  getUser(): Observable<any> {
    return this.subject.asObservable();
  }

  login(credentials) {
    this.httpClient.post('http://localhost:8000/auth/', credentials).subscribe((res) => {
      localStorage.setItem('Authorization', res['token'])
    })
  }

  register(credentials) {
    debugger;
    this.httpClient.post('http://localhost:8000/api/users/', credentials).subscribe((res) => {
      debugger
      console.log(res);
    })
  }
}