import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private url: string = "http://localhost:8080/tickets";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url)
  }
  deleteTicket(id:string): Observable<any>{
    return this.httpClient.delete(this.url+"/"+id)
  }
}