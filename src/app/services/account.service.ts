import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
    private accountsUrl = 'http://localhost:5000/api/accounts/';
    private test_username = 'test_username';
    private test_password = 'test_password';
    private token = 'Basic ' + btoa(this.test_username + ':' + this.test_password);
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.token
    });

    constructor(private http: Http) {}

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
