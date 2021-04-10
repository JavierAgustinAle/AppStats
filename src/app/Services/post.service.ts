import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    // Url
    protected postsAll = environment.POSTS_URL + 'post?limit=50';
    protected commentsByID = environment.POSTS_URL + '/post/{postId}/comment';


    constructor(private httpClient: HttpClient) { }

    getPosts() {
        return this.httpClient.get(this.postsAll, {
            headers: { 'app-id': environment.POSTS_KEY }
        });
    }

    getCommentsByPost() {
        return this.httpClient.get(this.commentsByID, {
            headers: { 'app-id': environment.POSTS_KEY }
        });
    }


}