import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { TicketModel } from '../models/ticket.model';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NgFor, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit{
  tickets: TicketModel[] = [];

  constructor(private ticketsService: TicketsService){}

  ngOnInit(): void {
    this.ticketsService.getAll().subscribe((res: TicketModel[]) => {
      this.tickets = res;    
    });
  }
  reload(){
    setTimeout(()=>{
      window.location.reload();
    }, 1);
    
  }
  deleteTicket(id:string): void{
    this.ticketsService.deleteTicket(id).subscribe(res=>{
      console.log(res);
    });
  }
}