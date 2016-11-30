
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class apiService {

    private apiUrl = 'app/heroes';  // URL to web API
    constructor (private http: Http) {}
}