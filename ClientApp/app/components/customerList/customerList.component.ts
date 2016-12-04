import { Component } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { apiService } from '../../Services/apiService'

@Component({
    selector: 'customerList',
    templateUrl: './customerList.component.html',
    styleUrls: ['./customerList.scss'],
    providers: [ apiService ]
})

export class customerListComponent {
    public customerList;
    public err;

    constructor(private service: apiService) {
        this.service.getCustomers()
                    .subscribe(
                        customer => this.customerList = customer,
                        err => this.err = err
                    )
    }
}