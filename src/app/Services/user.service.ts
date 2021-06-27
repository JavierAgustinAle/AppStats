import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    // Url
    protected userGender = environment.URL + 'inc=gender&results=50';

    protected userAges = environment.URL + 'inc=dob&results=50';

    protected userCountries = environment.URL + 'inc=nat&results=50';

    constructor(private httpClient: HttpClient) { }


    getUsersGender(): Observable<any> {
        return this.httpClient.get(this.userGender).pipe(
            catchError(this.errorHandler));
    }

    getUsersAge(): Observable<any> {
        return this.httpClient.get(this.userAges).pipe(
            catchError(this.errorHandler));
    }

    getUsersCountry(): Observable<any> {
        return this.httpClient.get(this.userCountries).pipe(
            catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.status || 'Server Error');
    }

}
