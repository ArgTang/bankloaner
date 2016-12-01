
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from '../components/Models/person'
import { Loan } from '../components/Models/loan'

@Injectable()
export class apiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl : string = "/api/Loan"

    constructor (private http: Http) {}


    getCustomers() {
        return this.http.get(this.baseUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    // addHero (person: Person, loan: Loan) {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     return this.http.post(this.baseUrl, { person, loan }, options)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}