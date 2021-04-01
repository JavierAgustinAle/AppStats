import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    // Url
    protected userAll = environment.URL + 'inc=gender,name,nat,registered,dob&results=50';


    constructor(private httpClient: HttpClient) { }


    getUsers() {
        return this.httpClient.get(this.userAll);
    }





}