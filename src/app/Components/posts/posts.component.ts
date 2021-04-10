import { Component, OnInit } from '@angular/core';

import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // 2020-05-24T14:53:17.598Z
  posts: any[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.posts = [
      {
        "text": "Adult Labrador retriever,Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
        "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
        "likes": 43,
        "tags": ["animal", "dog", "golden retriever"],
        "publishDate": "2020-05-24T14:53:17.598Z"
      },
      {
        "text": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
        "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
        "likes": 7,
        "tags": ["canine", "pet", "mammal"],
        "publishDate": "2020-08-28T14:53:17.598Z"
      },
      {
        "text": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "likes": 28,
        "tags": ["dog", "human", "animal"],
        "publishDate": "2020-05-23T14:53:17.598Z"
      },
      {
        "text": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
        "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
        "likes": 7,
        "tags": ["canine", "pet", "mammal"],
        "publishDate": "2020-08-28T14:53:17.598Z"
      },
      {
        "text": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "likes": 28,
        "tags": ["dog", "human", "animal"],
        "publishDate": "2020-05-23T14:53:17.598Z"
      },
      {
        "text": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
        "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
        "likes": 7,
        "tags": ["canine", "pet", "mammal"],
        "publishDate": "2020-08-28T14:53:17.598Z"
      },
      {
        "text": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "likes": 28,
        "tags": ["dog", "human", "animal"],
        "publishDate": "2020-05-23T14:53:17.598Z"
      }
    ]
    //  this.postService.getPosts().subscribe((resp: any) => {
    //    console.log(resp.data);
    //     this.posts = resp.data;
    //  })
  }
}
