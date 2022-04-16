import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'SubSink';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model';
import * as moment from 'moment';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as PostsActions from '../../store/actions/posts.action';
import * as FilterActions from '../../store/actions/filter.actions';
import * as StateActions from '../../store/actions/state.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  isLoading = true;
  posts: IPost[] = [];

  pageNumber = 1;
  selected: string;
  showMsg = false;
  types = [
    { value: '', label: 'Show All' },
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Hazard', label: 'Hazard' },
    { value: 'Theft', label: 'Theft' },
    { value: 'Crash', label: 'Crash' },
    { value: 'Infrastructure issue', label: 'Infrasctucture Issue' },
    { value: 'Chop shop', label: 'Chop Shop' }
  ];

  constructor(private postService: PostService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.store.dispatch(new StateActions.ChangeIcon('post'));
    this.subs.add(
      this.store.select('posts').pipe(take(1)).subscribe(s => {
        if (s.length > 1) {
          this.checkFilter(s);
        } else {
          this.getData();
        }
      })
    );
  }

  addPosts(posts): void {
    for (let i = 0; i < posts.length; i++) {
      console.log(posts)
      this.store.dispatch(new PostsActions.AddPosts(posts[i]));
    }
  }

  filterPosts(e: string): void {
    this.store.dispatch(new FilterActions.AddFilter(e));
    this.loadData();
  }

  getData(): void {
    this.subs.add(
      this.postService.getPosts().subscribe((resp: any) => {
        this.posts = resp.bikes;
        this.posts.map(ps => {
          ps.date_stolen != null ? ps.date_stolen = moment(parseInt(ps.date_stolen, 10) * 1000).format('DD MMM YYYY') : ps.date_stolen = 'No data';
           // if (ps.type === 'Unconfirmed') { ps.type = 'Undefined'; }
        });
        this.isLoading = false;
        this.addPosts(this.posts);
        console.log(this.posts)
      }, error => {
        this.store.dispatch(new StateActions.SetError(true));
        this.store.dispatch(new StateActions.SetStatus(error));
        this.isLoading = false;
      })
    );
  }

  checkFilter(s: IPost[]): void {
    this.subs.add(
      // Cambiar Filtros, ya no existen
      this.store.select('filters').pipe(take(1)).subscribe(res => {
        if (res.filter !== '') {
          const result = s.filter(p => p.status === res.filter);
          if (result.length > 0) {
            this.posts = result;
            this.showMsg = false;
          } else {
            this.posts = s;
            this.showMsg = true;
          }
          this.selected = res.filter;
        } else {
          this.posts = s;
          this.showMsg = false;
        }
        this.isLoading = false;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
