import { Component } from '@angular/core';
import { Http } from '@angular/http';


import { apiService } from '../../Services/apiService'


@Component({
    selector: 'customerList',
    templateUrl: './customerList.component.html',
    providers: [ apiService ]
})

export class customerListComponent {
    public customerList;
    public err;

    constructor(private http: Http, private service: apiService) {
        this.service.getCustomers()
                    .subscribe(
                        customer => this.customerList.push(JSON.stringify(customer)),
                        err => this.err = err
                    )
    }
}