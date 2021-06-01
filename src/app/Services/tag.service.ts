import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


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
        });
    }

}
