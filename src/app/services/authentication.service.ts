import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private subject = new Subject<any>();

  sendUser(user: any) {
    this.subject.next(user);
  }

  getUser(): Observable<any> {
    return this.subject.asObservable();
  }
}