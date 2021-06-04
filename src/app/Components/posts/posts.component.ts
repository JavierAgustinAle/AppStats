import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'SubSink';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model';
import * as moment from 'moment';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as PostsActions from '../../store/actions/posts.action';
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
  types = [
    { label: 'Show All' },
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

  loadData(filterSelect?: string): void {
    this.subs.add(
      this.store.select('posts').pipe(take(1)).subscribe(s => {
        if (s.length > 1) {
          if (filterSelect) {
            const result = s.filter(p => p.type === filterSelect);
            this.posts = result;
          } else {
            this.posts = s;
          }
          this.isLoading = false;
        } else {
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
          });
        }
      }
      )
    );

  }

  addPosts(posts): void {
    for (let i = 0; i < posts.length; i++) {
      this.store.dispatch(new PostsActions.AddPosts(posts[i]));
    }
  }

  filterPosts(e: string): void {
    this.loadData(e);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
