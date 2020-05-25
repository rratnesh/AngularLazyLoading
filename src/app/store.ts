import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const state: any = {
}

@Injectable({
    providedIn: 'root'
})
export class Store {

    private subject = new BehaviorSubject<any>(state);

    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        })
    }

}