import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesArr: any = [];
  movieUnsavedIdMap = {};

  constructor(private authService: AuthenticationService, private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.moviesArr = data[0];
      this.moviesArr.forEach(movie => {
        this.movieUnsavedIdMap[movie.id] = false;
      });
    })
  }

  updateMovie(id, moviesData) {
    this.movieService.updateAMovie(id, moviesData).subscribe((res) => {
      this.movieUnsavedIdMap[id] = false;
    })
  }

  confirm() {
    let confirmation = confirm('You have unsaved data. Are you sure you want to leave the page');
    return of(confirmation).toPromise();
  }

  markChanged(id) {
    this.movieUnsavedIdMap[id] = true;
  }
}
