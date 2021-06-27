import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    // Url 
    protected postsAll = environment.POSTS_URL + '?page=1&per_page=250';
    protected postById = environment.POSTS_URL + '/{id}';

    protected extraInfoPost = '{url}';

    constructor(private httpClient: HttpClient) { }

    getPosts(): Observable<any> {
        return this.httpClient.get(this.postsAll).pipe(
            catchError(this.errorHandler));
    }

    getPostByID(id: number): Observable<any> {
        return this.httpClient.get(this.postById.replace('{id}', id.toString())).pipe(
            catchError(this.errorHandler));
    }

    getExtraInfo(url: string): Observable<any> {
        return this.httpClient.get(this.extraInfoPost.replace('{url}', url)).pipe(
            catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.status || 'Server Error');
    }
}
