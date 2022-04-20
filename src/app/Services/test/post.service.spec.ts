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
    const getAllResponse: IPost[] = [{
      'id': 1,
      'stolen_location': 'test',
      'description': 'test',
      'manufacturer_name': 'test',
      'date_stolen': 'test',
      'title': 'test',
      'serial': 'test',
      'url': 'test',
      'status': 'test',
      'large_img': 'test',
      'stolen_coordinates': [1, -1],
      'public_images': [{ medium: 'test' }]
    },
    {
      'id': 2,
      'stolen_location': 'test',
      'description': 'test',
      'manufacturer_name': 'test',
      'date_stolen': 'test',
      'title': 'test',
      'serial': 'test',
      'url': 'test',
      'status': 'test',
      'large_img': 'test',
      'stolen_coordinates': [1, -1],
      'public_images': [{ medium: 'test' }]
    }];

    postsService.getPosts().subscribe(posts => {
      expect(posts).toBeTruthy('No posts returned.');
      expect(posts.length).toBeGreaterThan(0);
      expect(posts).toEqual(getAllResponse);
    });

    const req = httpTestingController.expectOne(environment.POSTS_URL + '?page=1&per_page=100&stolenness=all');
    expect(req.request.method).toEqual('GET');
  });

  it('Should get a post by id', () => {
    const id = 1;
    const postResponse: IPost = {
      'id': 1,
      'stolen_location': 'test',
      'description': 'test',
      'manufacturer_name': 'test',
      'date_stolen': 'test',
      'title': 'test',
      'serial': 'test',
      'url': 'test',
      'status': 'test',
      'large_img': 'test',
      'stolen_coordinates': [1, -1],
      'public_images': [{ medium: 'test' }]
    };

    postsService.getPostByID(id).subscribe(post => {
      expect(post).toBeTruthy();
      expect(post).toEqual(postResponse);
    });

    const req = httpTestingController.expectOne(environment.POST_GET_BY_ID + '/1');
    expect(req.request.method).toEqual('GET');
  });
});