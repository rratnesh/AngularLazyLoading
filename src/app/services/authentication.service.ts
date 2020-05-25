import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router, private store: Store) { }

  private subject = new Subject<any>();

  sendUser(user: any) {
    this.subject.next(user);
  }

  getUser(): Observable<any> {
    return this.subject.asObservable();
  }

  login(credentials) {
    // this.httpClient.post('http://localhost:8000/auth/', credentials).subscribe((res) => {
    //   localStorage.setItem('Authorization', res['token']);
    //   this.router.navigate(['/pages']);
    // })
    this.store.set('user', { name: 'Ratnesh kumar Singh' });
    this.router.navigate(['/pages']);
  }

  register(credentials) {
    debugger;
    this.httpClient.post('http://localhost:8000/api/users/', credentials).subscribe((res) => {
      debugger
      console.log(res);
    })
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('Authorization') ? true : false;
  }
}