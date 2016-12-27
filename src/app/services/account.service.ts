import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Headers, Http } from '@angular/http';
import { Configuration } from '../app.constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
    private accountsUrl = this.config.serverWithApiUrl + 'accounts/';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.config.token
    });

    constructor(private http: Http,
                private config: Configuration) {}

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.accountsUrl, {headers: this.headers})
                   .toPromise()
                   .then(response => response.json() as Account[])
                   .catch(this.handleError);
               }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
