import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-form-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './movie-form-dialog.component.html',
  styleUrl: './movie-form-dialog.component.css'
})
export class MovieFormDialogComponent {
  ticketForm = new FormGroup({
    id: new FormControl(''),
    customerName: new FormControl(''),
    movie: new FormControl(''),
    seatNumber: new FormControl(''),
    price: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<MovieFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
  }

  onSubmit():void{
    const newTicket = {
      id: this.ticketForm.controls.movie.getRawValue(),
      customerName: this.ticketForm.controls.customerName.getRawValue(),
      movie: { id: this.ticketForm.controls.id.getRawValue() },
      seatNumber: this.ticketForm.controls.seatNumber.getRawValue(),
      price: 10
    }

    console.log(newTicket);
    this.dialogRef.close({ data:newTicket })
  }
  close(): void{
    this.dialogRef.close();
  }

}
