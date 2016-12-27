import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://localhost:5000/';
    public apiUrl: string = 'api/';
    public serverWithApiUrl = this.server + this.apiUrl;
    public test_username = 'test_username';
    public test_password = 'test_password';
    public token = 'Basic ' + btoa(this.test_username + ':' + this.test_password);
}
