import { HttpClientTestingModule } from "@angular/common/http/testing";
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../Services/post.service';
import { PostsComponent } from './posts.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from "rxjs";


describe('Test Posts Component', () => {

  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let service: PostService;
  let store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        PostsComponent
      ],
      providers: [PostService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    service = TestBed.get(PostService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  })

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const spy = spyOn(component, 'loadData');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  // it('should getData', () => {
  //   spyOn(service, 'getPosts').and.callThrough();

  //   component.getData();
  //   expect(service.getPosts).toHaveBeenCalled();
  // });

  it('should checkFilter from store', () => {
    const s = [{
      'id': 1,
      'stolen_location': 'test',
      'manufacturer_name': 'test',
      'date_stolen': 'test',
      'title': 'test',
      'description': 'test',
      'serial': 'test',
      'url': 'test',
      'status': 'test',
      'large_img': 'test',
      'stolen_coordinates': [1, -1],
      'public_images': [{ medium: 'test' }]
    }, {
      'id': 2,
      'stolen_location': 'test',
      'manufacturer_name': 'test',
      'date_stolen': 'test',
      'title': 'test',
      'description': 'test',
      'serial': 'test',
      'url': 'test',
      'status': 'test',
      'large_img': 'test',
      'stolen_coordinates': [1, -1],
      'public_images': [{ medium: 'test' }]
    }]
    spyOn(store, 'select').and.callThrough();
    component.checkFilter(s);
    expect(store.select).toHaveBeenCalled();
  });




  it('should addPosts', () => {
    spyOn(store, 'dispatch').and.callThrough();
    const param = [1, 2, 3, 4]

    component.addPosts(param);
    expect(store.dispatch).toHaveBeenCalledTimes(4);
  });

  describe('Test loadData', () => {
    it('loadData with no post return from store', () => {
      const res = []
      spyOn(store, 'dispatch').and.callThrough();
      spyOn(store, 'select').withArgs('posts').and.returnValue(of(res));
      const spy = spyOn(component, 'getData');

      component.loadData();
      expect(store.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });

    it('loadData with a post return from store', () => {
      const res = [{ test: 'test' }, { test: 'test' }]
      spyOn(store, 'dispatch').and.callThrough();
      spyOn(store, 'select').withArgs('posts').and.returnValue(of(res));
      const spy = spyOn(component, 'checkFilter');

      component.loadData();
      expect(store.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should filterPosts', () => {
    const spy = spyOn(component, 'loadData');
    spyOn(store, 'dispatch').and.callThrough();
    const param: string = 'stolen';

    component.filterPosts(param);
    expect(spy).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
  });

});