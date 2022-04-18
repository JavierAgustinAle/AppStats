import { UserService } from '../user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { environment } from '../../../environments/environment';
import { IUser } from '../../Models/IUser.model';

describe('Testing User Service', () => {

  let userService: UserService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    });
    userService = TestBed.inject<UserService>(UserService);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
  });

  it('Should Get users genders', () => {
    const genderResponse = {
      'gender': 'test'
    };
    userService.getUsersGender().subscribe(genders => {
      expect(genders).toBeTruthy('No genders returned.');
      expect(genders.length).toBeGreaterThan(0);

      expect(genders).toBe(genderResponse);
    });

    const req = httpTestingController.expectOne(environment.URL + 'inc=gender&results=50');
    expect(req.request.method).toEqual('GET');
  });

  it('Should Get users ages', () => {
    const ageResponse = {
      'dob': {
        'age': 48,
        'date': '1973-12-11T22:24:37.738Z'
      }
    }
    userService.getUsersAge().subscribe(ages => {
      expect(ages).toBeTruthy('No genders returned.');
      expect(ages.length).toBeGreaterThan(0);

      expect(ages).toEqual(ageResponse);
    });

    const req = httpTestingController.expectOne(environment.URL + 'inc=dob&results=50');
    expect(req.request.method).toEqual('GET');
  });

})