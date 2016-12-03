
import { Injectable } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from '../components/Models/person'
import { Loan } from '../components/Models/loan'

@Injectable()
export class apiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl: string = "/api/Loan";

    constructor (private http: Http) {}

    getCustomers() {
        return this.http.get(this.baseUrl + '/1')
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    addCustomer(customer: Person, loan: Loan) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        let body = {customer, loan}

        let res = this.http.post(this.baseUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
        return res;
     }


    private extractData(res: Response) {
        return res.json() || { };
    }

    private handleError(error: Response | any) {
        console.table(error);
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            let err = '';
            if (body[""]) {
                err = body[""][0];
            } else {
                err = body.error || JSON.stringify(body);
            }
            errMsg = err;
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    addComment(body: Object) {
        let baseUrl: string = "/api/Loan";
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(baseUrl, body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}