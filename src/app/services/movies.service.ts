import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketModel } from '../models/ticket.model';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url: string = "http://localhost:8080/movies";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  }
  addTicket(request:TicketModel): Observable<any>{
    return this.httpClient.post("http://localhost:8080/tickets/book", request);
  }
  deleteMovie(id:string): Observable<any>{
    return this.httpClient.delete(this.url+"/"+id)
  }
  addMovie(request:MovieModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }
}