import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model'

import * as moment from 'moment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost = null;
  lng: number = null;
  lat: number = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = Number(routeParams.get('id'));

    this.postService.getPostByID(postId).subscribe((res: any) => {
      this.post = res.incident;
      this.post.occurred_at = moment(parseInt(this.post.occurred_at) * 1000).format("DD MMM YYYY");

      this.postService.getExtraInfo(this.post.source.api_url).subscribe((response: any) => {
        response.lat ? this.lat = response.lat : null;
        response.lng ? this.lng = response.lng : null;

      })
    }, error => {
      console.error(error);
    })
  }


}
