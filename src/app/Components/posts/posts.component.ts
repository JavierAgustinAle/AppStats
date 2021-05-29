import { Component, OnInit } from '@angular/core';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model';
import * as moment from 'moment';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  /* Types:
        crash
        hazard
        theft
        Undefined
        infrasctucture_issue
        chop_shop
  */
  isLoading = true;
  posts: IPost[] = [];
  pageNumber = 1;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.postService.getPosts().subscribe((resp: any) => {
      this.posts = resp.incidents;
      this.posts.map(ps => {
        ps.occurred_at = moment(parseInt(ps.occurred_at, 10) * 1000).format('DD MMM YYYY');
        if (ps.type === 'Unconfirmed') { ps.type = 'Undefined'; }
      });
      this.isLoading = false;
    });
  }
}
