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
        this.posts = resp.incidents;
        this.posts.map(ps => {
          ps.occurred_at = moment(parseInt(ps.occurred_at, 10) * 1000).format('DD MMM YYYY');
          if (ps.type === 'Unconfirmed') { ps.type = 'Undefined'; }
        });
        this.isLoading = false;
        this.addPosts(this.posts);
      }, error => {
        console.log(error);
      })
    );
  }

  checkFilter(s: IPost[]): void {
    this.subs.add(
      this.store.select('filters').pipe(take(1)).subscribe(res => {
        if (res[0].filter !== '') {
          const result = s.filter(p => p.type === res[0].filter);
          if (result.length > 0) {
            this.posts = result;
            this.showMsg = false;
          } else {
            this.posts = s;
            this.showMsg = true;
          }
          this.selected = res[0].filter;
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
