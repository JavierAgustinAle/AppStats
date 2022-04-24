
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../Services/post.service';
import { PostDetailsComponent } from './post-details.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from "rxjs";
import { delay } from "rxjs/operators";


describe('Test Post Details Component', () => {

  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
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
        PostDetailsComponent
      ],
      providers: [PostService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    service = TestBed.get(PostService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(service, 'getPostByID').and.callThrough();
    component.ngOnInit();

    expect(service.getPostByID).toHaveBeenCalled();
  });


});





