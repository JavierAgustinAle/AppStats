import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    // Url
    protected userAll = environment.URL + 'user';
    protected userByID = environment.URL + 'user/{userId}';

    protected postsByUserID = environment.URL + 'user/{userId}/post';

    constructor(private httpClient: HttpClient) { }


    getUsers() {
        return this.httpClient.get(this.userAll, {
            headers: { 'app-id': environment.KEY }
        });
    }

    getUserByID(id: string) {
        return this.httpClient.get(this.userByID.replace('{userId}', id), {
            headers: { 'app-id': environment.KEY }
        });
    }


    getPostByUserID(id: string) {
        return this.httpClient.get(this.postsByUserID.replace('{postId}', id), {
            headers: { 'app-id': environment.KEY }
        });
    }

}