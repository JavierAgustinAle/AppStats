import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class TagService {

    // Url
    protected tagsAll = environment.TAGS_URL + 'limit=100';

    constructor(private httpClient: HttpClient) { }


    getTags(): Observable<any> {
        return this.httpClient.get(this.tagsAll, {
            headers: { 'app-id': environment.API_KEY }
        }).pipe(
            catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.status || 'Server Error');
    }
}
