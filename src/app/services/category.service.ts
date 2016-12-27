import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Headers, Http } from '@angular/http';
import { Configuration } from '../app.constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
    private categoriesUrl = this.config.serverWithApiUrl + 'categories/';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.config.token
    });

    constructor(private http: Http,
                private config: Configuration) {}

    getCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl, {headers: this.headers})
                   .toPromise()
                   .then(response => response.json() as Category[])
                   .catch(this.handleError);
               }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
