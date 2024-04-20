import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-movie-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatDividerModule],
  templateUrl: './add-movie-dialog.component.html',
  styleUrl: './add-movie-dialog.component.css'
})
export class AddMovieDialogComponent {
  addMovieForm = new FormGroup({
    title: new FormControl(''),
    director: new FormControl(''),
    durationMinutes: new FormControl(''),
    genre: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<AddMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
  }
  onSubmit(): void{
    const newMovie = {
      title:this.addMovieForm.controls.title.getRawValue(),
      director:this.addMovieForm.controls.director.getRawValue(),
      durationMinutes:this.addMovieForm.controls.durationMinutes.getRawValue(),
      genre:this.addMovieForm.controls.genre.getRawValue()
    }

    console.log(newMovie);
    this.dialogRef.close({ data:newMovie })

    setTimeout(()=>{
      window.location.reload();
    }, 500);
  }
  close():void{
    this.dialogRef.close();
  }
   
}
