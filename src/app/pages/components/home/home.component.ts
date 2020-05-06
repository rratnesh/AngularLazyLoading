import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesArr:any = [];

  constructor(private authService: AuthenticationService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((moviesArr) => {
      this.moviesArr = moviesArr;
    })
  }

  updateMovie(id, moviesData){
    this.movieService.updateAMovie(id, moviesData).subscribe((res) =>{
      console.log(res);
    })
  }
}
