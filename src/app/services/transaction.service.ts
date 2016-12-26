import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {
    private transactionsUrl = 'http://localhost:5000/api/transactions/';
    private test_username = 'test_username';
    private test_password = 'test_password';
    private token = 'Basic ' + btoa(this.test_username + ':' + this.test_password);
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.token
    });

    constructor(private http: Http) {}

    getTransactions(): Promise<Transaction[]> {
        return this.http.get(this.transactionsUrl, {headers: this.headers})
                   .toPromise()
                   .then(response => response.json() as Transaction[])
                   .catch(this.handleError);
               }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
