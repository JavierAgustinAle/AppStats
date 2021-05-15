import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OlMapComponent } from './Components/ol-map/ol-map.component';


// Redux
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './store/reducers/posts.reducer';

// Components
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { UserComponent } from './Components/Users/user.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserComponent,
    PostsComponent,
    PostDetailsComponent,
    OlMapComponent],
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
    MatListModule,
    ChartsModule,
    NgxPaginationModule,
    StoreModule.forRoot({ posts: postsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
