
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class apiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl : string = "/api/Loan"

    constructor (private http: Http) {}


    getCustomers() {

    }
}