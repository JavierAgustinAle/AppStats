import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as StateActions from '../../store/actions/state.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-error-component',
  template: ``,
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {
  error$: Observable<any>;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.error$ = this.store.select('states');
  }

  ngOnInit(): void {
    this.error$.subscribe(i => { if (i.errorStatus) { this.openDialog() } else { this.closeDialog() } });
  }

  openDialog() {
    this.dialog.open(ErrorDialog);
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'error-dialog',
  templateUrl: 'error.component.html',
})
export class ErrorDialog implements OnInit {
  status: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('states').pipe(take(1)).subscribe(res => {
      this.status = res.errorType;
    })
  }
  closeDialog() {
    this.store.dispatch(new StateActions.SetError(false));
    this.store.dispatch(new StateActions.SetStatus(''));
  }
}