import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { SubSink } from 'SubSink';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as StateActions from '../../store/actions/state.actions';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  icons$: Observable<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    this.icons$ = this.store.select('states');
  }

  ngOnInit(): void {
    this.icons$.subscribe(i => this.changeIcon(i[0].iconMenu, true));
  }

  closeBar(): boolean {
    if (window.innerWidth < 960) {
      return true;
    } else {
      return false;
    }
  }

  changeIcon(iconName?: string, init: boolean = false): void {
    if (iconName && !init) {
      this.store.dispatch(new StateActions.ChangeIcon(iconName));
    }
    const icons = ['user', 'post', 'tag'];

    this.subs.add(
      this.store.select('states').pipe(take(1)).subscribe(icon => {
        console.log(icon)
        if (icon[0].iconMenu != 'NotFound') {
          document.getElementById(icon[0].iconMenu).classList.add('iconSelect');

          for (let i of icons) {
            if (i != icon[0].iconMenu) {
              document.getElementById(i).classList.remove('iconSelect');
            }
          }
        } else {
          for (let i of icons) {
            document.getElementById(i).classList.remove('iconSelect');
          }
        }

      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
