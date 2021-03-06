import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

// Redux
import { StoreModule } from '@ngrx/store';
import { PostReducer } from '../app/store/reducers/posts.reducer';
import { FilterReducer } from '../app/store/reducers/filter.reducer';
import { StateReducer } from '../app/store/reducers/state.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { UserComponent } from './Components/Users/user.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';
import { OlMapComponent } from './Components/ol-map/ol-map.component';
import { TagsComponent } from './Components/tags/tags.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ErrorComponentComponent } from './shared/error-component/error-component.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserComponent,
    PostsComponent,
    PostDetailsComponent,
    OlMapComponent,
    TagsComponent,
    PageNotFoundComponent,
    ErrorComponentComponent
  ],
  imports: [
    MatProgressBarModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    ChartsModule,
    NgxPaginationModule,
    StoreModule.forRoot({
      posts: PostReducer,
      filters: FilterReducer,
      states: StateReducer
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
