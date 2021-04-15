import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    // Url
    protected postsAll = environment.POSTS_URL + '?page=1';
    protected postById = environment.POSTS_URL + '/{id}';


    constructor(private httpClient: HttpClient) { }

    getPosts() {
        return this.httpClient.get(this.postsAll);
    }

    getPostByID() {
        return this.httpClient.get(this.postById);
    }


}