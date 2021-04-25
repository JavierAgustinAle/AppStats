import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = Number(routeParams.get('id'));

    this.postService.getPostByID(postId).subscribe((res: any) => {
      console.log(res.incident)
    })
  }

}
