
import { Injectable } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from '../components/Models/person'
import { Loan } from '../components/Models/loan'

@Injectable()
export class apiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl : string = "/api/Loan"

    constructor (private http: Http) {}


    getCustomers() {
        return this.http.get(this.baseUrl + '/1')
                    .map(this.extractData)
                    .catch(this.handleError);
    }

     addCustomer(person: Person, loan: Loan) {
         const headers = new Headers({ 'Content-Type': 'application/json' });
         const options = new RequestOptions({ headers: headers });

         return this.http.post(this.baseUrl, { person, loan }, options)
                         .map(this.extractData)
                         .catch(this.handleError);
     }


    private extractData(res: Response) {
        const body = res.json();
//        console.table(body);
        return body || { };
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