import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TicketsComponent } from './tickets/tickets.component';

export const routes: Routes = [
    {path:'movies', component:MoviesComponent},
    {path:'tickets', component:TicketsComponent}
];
