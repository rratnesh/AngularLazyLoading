import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('Authorization');
    headers = headers.append('Authorization', `Token ${authToken}`);
    return this.httpClient.get('http://localhost:8000/api/movies/', { headers });
  }

  updateAMovie(id, movieData) {
    debugger;
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('Authorization');
    headers = headers.append('Authorization', `Token ${authToken}`);
    return this.httpClient.put(`http://localhost:8000/api/movies/${id}/`, movieData, { headers });
  }
}
