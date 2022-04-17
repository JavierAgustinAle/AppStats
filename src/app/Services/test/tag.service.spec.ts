import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TagService } from '../tag.service';


describe('Tag Service', () => {
  let injector: TestBed;
  let service: TagService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagService],
    });

    injector = getTestBed();
    service = injector.get(TagService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should Get Tags', () => {
    const tagsResponse = {
      data: ['Angular', 'Bikes', 'test']
    }

    service.getTags().subscribe((res) => {
      expect(res).toEqual(tagsResponse);
    });

    const req = httpMock.expectOne('https://dummyapi.io/data/v1/tag');
    expect(req.request.method).toBe('GET');
    req.flush(tagsResponse);

  });

  it('should handle Error and return error status', () => {

    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = mockErrorResponse.status;
    service.getTags().subscribe(res => response = res, err => errResponse = err);
    httpMock.expectOne('https://dummyapi.io/data/v1/tag').flush(data, mockErrorResponse);
    expect(errResponse).toBe(data);
  })



})