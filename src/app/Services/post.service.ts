import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    // Url
    protected postsAll = environment.URL + 'post';
    protected postByID = environment.URL + 'post/{postId}';


    protected commentsByIDPost = environment.URL + 'post/{postId}/comment';


    constructor(private httpClient: HttpClient) { }

    getPosts() {
        return this.httpClient.get(this.postsAll, {
            // headers: { 'app-id': environment.KEY }
        });
    }

    getPostByID(id: string) {
        return this.httpClient.get(this.postByID.replace('{postId}', id), {
            // headers: { 'app-id': environment.KEY }
        });
    }


    getCommentByID(id: string) {
        return this.httpClient.get(this.commentsByIDPost.replace('{postId}', id), {
            // headers: { 'app-id': environment.KEY }
        });
    }

}