import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    // Url + '?page=1&per_page=250';
    protected postsAll = environment.POSTS_URL + '?page=1&per_page=250';
    protected postById = environment.POSTS_URL + '/{id}';

    protected extraInfoPost = '{url}';

    constructor(private httpClient: HttpClient) { }

    getPosts() {
        return this.httpClient.get(this.postsAll);
    }

    getPostByID(id: number) {
        return this.httpClient.get(this.postById.replace('{id}', id.toString()));
    }

    getExtraInfo(url: string) {
        return this.httpClient.get(this.extraInfoPost.replace('{url}', url));
    }

}