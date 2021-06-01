import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    // inc=gender,name,nat,registered,dob&results=50
    // Url
    protected userGender = environment.URL + 'inc=gender&results=50';

    protected userAges = environment.URL + 'inc=dob&results=50';

    protected userCountries = environment.URL + 'inc=nat&results=50';

    constructor(private httpClient: HttpClient) { }


    getUsersGender(): Observable<any> {
        return this.httpClient.get(this.userGender);
    }

    getUsersAge(): Observable<any> {
        return this.httpClient.get(this.userAges);
    }

    getUsersCountry(): Observable<any> {
        return this.httpClient.get(this.userCountries);
    }

}
