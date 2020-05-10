import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../pages/components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanDeactivate<HomeComponent> {

  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let unsaved = false;
    let movieUnsavedIdMap = component.movieUnsavedIdMap

    for (let id in movieUnsavedIdMap) {
      if (movieUnsavedIdMap[id]) {
        unsaved = true;
        break;
      }
    }

    if (unsaved) {
      return component.confirm().then((confirmation) => {
        if (confirmation === true) {
          return true;
        } else {
          return false;
        }
      }).catch(err => {
        return true;
      })
    } else {
      return true;
    }
  }
}
