import { OnInit, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../Models/Person';
import { apiService } from '../../Services/apiService';

@Component({
    selector: 'registrer-comp',
    templateUrl: './registrer.component.html',
    styleUrls: ['./registrer.component.scss'],
    providers: [ apiService ]
})

export class RegistrerComponent {

    modalTitle: string = "Modal";
    modalMessage: string = "Melding";
    modalOpen: boolean;
    http: boolean;
    
    requiredmessage = 'Dette feltet må være fylt ut!';
    public modal: boolean;

    private Person: Person;
    @Input() loan;

    regForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private service: apiService) {}

    ngOnInit() {
        this.regForm = this.formBuilder.group({
            name: ['', Validators.required],
            secnumber: ['', Validators.required],
            email: ['', Validators.required],
            phone:['', Validators.required],
        });
    }

    register() {
        this.http = true;
        let vals = this.regForm.value;
        this.Person = {
            name: vals.name,
            secNumber: vals.secnumber,
            email: vals.email,
            phone: vals.phone,
        }

        this.service.addCustomer(this.Person, this.loan)
            .subscribe(
                result => {
                    this.modalTitle = "Succsess";
                    this.modalMessage = JSON.stringify(result);
                    this.modalOpen = true;
                    this.http = false;
                },
                err => {
                    this.modalTitle = "Dette gikk galt";
                    this.modalMessage = err;
                    this.modalOpen = true;
                    this.http = false;
                }
            )
    }
}