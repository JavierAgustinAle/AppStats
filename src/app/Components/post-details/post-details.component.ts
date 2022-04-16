import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../Services/post.service';
import { IPost } from '../../Models/IPost.model';

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
      this.post = res.bike;
      this.post.date_stolen = moment(parseInt(this.post.date_stolen, 10) * 1000).format('DD MMM YYYY');
      console.log(this.post)
      if (this.post.stolen_coordinates != null) {
        this.lat = this.post.stolen_coordinates[0];
        this.lng = this.post.stolen_coordinates[1];
      }
    }, error => {
      console.error(error);
    });
  }


}
