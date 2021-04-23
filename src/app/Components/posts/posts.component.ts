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
  isLoading: boolean = true;
  posts: IPost[] = [];
  pageNumber: number = 1;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.postService.getPosts().subscribe((resp: any) => {
      this.posts = resp.incidents;
      this.posts.map(ps => {
        ps.occurred_at = moment(parseInt(ps.occurred_at) * 1000).format("DD MMM YYYY");
        ps.type === "Unconfirmed" ? ps.type = 'Undefined' : null;
      });
      this.isLoading = false;
    })
  }
}
