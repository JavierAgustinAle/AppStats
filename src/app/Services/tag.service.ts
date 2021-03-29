import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class TagService {

    // Url
    protected tagsAll = environment.URL + 'tag';
    protected postsByTag = environment.URL + '/tag/{tagTitle}/post';

    constructor(private httpClient: HttpClient) { }


    getTags() {
        return this.httpClient.get(this.tagsAll, {
            headers: { 'app-id': environment.KEY }
        });
    }

    getPostByID(tag: string) {
        return this.httpClient.get(this.postsByTag.replace('{tagTitle}', tag), {
            headers: { 'app-id': environment.KEY }
        });
    }

}