import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieModel } from '../models/movie.model';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MovieFormDialogComponent } from '../movie-form-dialog/movie-form-dialog.component';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movies: MovieModel[] = [];

  constructor(private moviesService: MoviesService, public dialog:MatDialog){}

  ngOnInit(): void {
    this.moviesService.getAll().subscribe(res =>{
      this.movies = res.map((movie:any) =>{
        return {
          id: movie.id,
          title: movie.title,
          director: movie.director,
          durationMinutes: movie.durationMinutes,
          genre: movie.genre

        }
      })
    })
  }

  book():void{
    const dialogRef = this.dialog.open(MovieFormDialogComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: 'Some data'
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      this.moviesService.addTicket(res.data).subscribe();
    })
  }
  reload(){
    setTimeout(()=>{
      window.location.reload();
    }, 1);
    
  }
  deleteMovie(id:string): void{
    this.moviesService.deleteMovie(id).subscribe(res=>{
      console.log(res);
    });
  }
  openMovieDialog():void{
    const dialogRef = this.dialog.open(AddMovieDialogComponent, {
      width: '500px',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      data: 'some dataaaa'
    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      this.moviesService.addMovie(res.data).subscribe();
    })
  }
}
