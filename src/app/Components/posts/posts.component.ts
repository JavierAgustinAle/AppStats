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
  // moment(resp.incidents[0].updated_at * 1000).format("DD MMM YYYY hh:mm a")
  posts: IPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.postService.getPosts().subscribe((resp: any) => {
      console.log(resp.incidents);
      this.posts = resp.incidents;

      //(document.getElementById('loader') as HTMLElement).style.display = 'none';
    })
  }
}
