import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MoviesResolve implements Resolve<any>{

    constructor(private moviesService: MovieService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.moviesService.getAllMovies().pipe(map((data: any[]) => {
            // data = [];
            if(data && data.length){
                return data;
            }
            this.router.navigate(['/not-found']);
            return null;
        }))
    }
}