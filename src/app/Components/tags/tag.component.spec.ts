import { HttpClientTestingModule } from "@angular/common/http/testing";
import { waitForAsync, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { TagService } from '../../Services/tag.service';
import { TagsComponent } from './tags.component';
import { Store, StoreModule } from '@ngrx/store';


describe('Test Tag Component', () => {

  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;
  let service: TagService;
  let store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        TagsComponent
      ],
      providers: [TagService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    service = TestBed.get(TagService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const spy = spyOn(component, 'loadData');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should loadData', () => {
    spyOn(service, 'getTags').and.callThrough();
    component.loadData();
    expect(service.getTags).toHaveBeenCalledWith();

  })

  describe('Test sortAphabet', () => {
    beforeEach(() => { component.tags = ['Zoo', 'Angular', 'Bikes']; });

    it('test with descending false', () => {
      component.descending = false;

      const tagsSorted = ['Angular', 'Bikes', 'Zoo']

      component.sortAlphabet();

      expect(component.tags).toEqual(tagsSorted);
      expect(component.descending).toBe(true);

    });

    it('test with descending true', () => {
      component.descending = true;

      const tagsSortedDes = ['Zoo', 'Bikes', 'Angular'];

      component.sortAlphabet();

      expect(component.tags).toEqual(tagsSortedDes);
      expect(component.descending).toBe(false);

    });
  });

  describe('Test SortLength', () => {
    beforeEach(() => { component.tags = ['Zoo', 'Angular', 'Bikes']; });

    it('test with order === "desc" ', () => {
      component.order = 'desc';
      const tagsOrderDesc = ['Zoo', 'Bikes', 'Angular'];

      component.sortLength();

      expect(component.tags).toEqual(tagsOrderDesc);
      expect(component.order).toBe('asc');
    });

    it('test with order === "asc" ', () => {
      component.order = 'asc';
      const tagsOrderAsc = ['Angular', 'Bikes', 'Zoo'];

      component.sortLength();

      expect(component.tags).toEqual(tagsOrderAsc);
      expect(component.order).toBe('desc');
    });
  });



});