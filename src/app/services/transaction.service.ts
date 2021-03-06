import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Headers, Http } from '@angular/http';
import { Configuration } from '../app.constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {
    private transactionsUrl = this.config.serverWithApiUrl + 'transactions/';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.config.token
    });

    constructor(private http: Http,
                private config: Configuration) {}

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
