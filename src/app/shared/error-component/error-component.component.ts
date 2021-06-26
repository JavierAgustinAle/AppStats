import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-error-component',
  template: '',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
