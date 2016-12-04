
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
                        .map(this.postresult)
                        .catch(this.handleError);
        return res;
     }

    private postresult(res: Response) {
        //this is a hack: res.json() crashes horribly
        return JSON.parse(JSON.stringify(res))._body

    }

    private extractData(res: Response) {
        const rest = res.json();
        return rest || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            if (body[""]) {
                errMsg = body[""][0];
            } else {
                errMsg = body.error || JSON.stringify(body);
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}