import { PostService } from '../post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { environment } from '../../../environments/environment';
import { IPost } from '../../Models/IPost.model';

describe('Post Service Unit Test', () => {

  let postsService: PostService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PostService
      ]
    });
    postsService = TestBed.inject<PostService>(PostService);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
  });

  it('Should Get All Posts', () => {
    postsService.getPosts().subscribe(posts => {
      expect(posts).toBeTruthy('No posts returned.');
      expect(posts.length).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne(environment.POSTS_URL + '?page=1&per_page=250');
    expect(req.request.method).toEqual('GET');
  });

  it('Should get a post by id', () => {
    const id = 1;
    const postResponse: IPost = {
      'id': 1,
      'address': 'test',
      'description': 'test',
      'media': {
        'image_url': 'test',
        'image_url_thumb': 'test',
      },
      'occurred_at': 'test',
      'updated_at': 1,
      'title': 'test',
      'type': 'test',
      'source': {
        'name': 'test',
        'html_url': 'test',
        'api_url': 'test'
      }
    };

    postsService.getPostByID(id).subscribe(post => {
      expect(post).toBeTruthy();
      expect(post).toEqual(postResponse);
    });

    const req = httpTestingController.expectOne(environment.POSTS_URL + '/1');
    expect(req.request.method).toEqual('GET');
  });
});