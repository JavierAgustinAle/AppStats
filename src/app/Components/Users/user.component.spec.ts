import { HttpClientTestingModule } from "@angular/common/http/testing";
import { waitForAsync, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../Services/user.service';
import { UserComponent } from './user.component';
import { Store, StoreModule } from '@ngrx/store';


describe('Test User Component', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: UserService;
  let store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        UserComponent
      ],
      providers: [UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    service = TestBed.get(UserService);
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
    spyOn(service, 'getUsersGender').and.callThrough();
    spyOn(service, 'getUsersAge').and.callThrough();
    spyOn(service, 'getUsersCountry').and.callThrough();

    component.loadData();
    expect(service.getUsersGender).toHaveBeenCalledWith();
    expect(service.getUsersAge).toHaveBeenCalledWith();
    expect(service.getUsersCountry).toHaveBeenCalledWith();
  });

  it('should loadChartGenders', () => {
    component.usersGenders = [
      { gender: 'male' },
      { gender: 'male' },
      { gender: 'male' },
      { gender: 'female' },
      { gender: 'female' },
      { gender: 'female' }
    ];
    const expected = [
      { data: [3, 0], label: 'Male', backgroundColor: 'rgba(72, 47, 247, 1)', hoverBackgroundColor: 'rgba(72, 47, 247, 1)' },
      { data: [0, 3], label: 'Female', backgroundColor: 'rgba(252, 81, 133, 1)', hoverBackgroundColor: 'rgba(252, 81, 133, 1)' }
    ];
    component.loadChartGenders();

    expect(component.genderChartData).toEqual(expected);

  });

  it('should loadChartAges', () => {
    component.userAges = [
      { dob: { date: '1975-10-09T11:25:01.117Z', age: 47 } },
      { dob: { date: '1971-02-22T09:59:38.042Z', age: 51 } },
      { dob: { date: '1956-10-29T12:06:06.735Z', age: 66 } },
      { dob: { date: '2018-10-29T12:06:06.735Z', age: 4 } },
      { dob: { date: '1999-10-29T12:06:06.735Z', age: 23 } }
    ];
    const expected = [2, 1, 2];
    component.loadChartAges();

    expect(component.ageChartData).toEqual(expected);

  });
});