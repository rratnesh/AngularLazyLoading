import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get('http://localhost:8000/api/movies/');
  }

  updateAMovie(id, movieData) {
    return this.httpClient.put(`http://localhost:8000/api/movies/${id}/`, movieData);
  }
}
