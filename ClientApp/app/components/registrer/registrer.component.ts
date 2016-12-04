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

    public validation = {
        required: 'Dette feltet må være fylt ut!',
        minlength: 'Dette feltet må minst ha to tegn',
        number: 'Dette feltet kan kun ha tall',
        email: 'Sjekk at emailadressen er skrevet riktig',
        letter: 'Dette feltet kan kun ha bokstaver',
        minletter: function (number) { return `Dette feltet må ha ${number} tegn` }
    };

    public modal = {
        title: 'Modal',
        message: 'Melding',
        open: false
    }
    http: boolean;

    private Person: Person;
    @Input() loan;

    regForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private service: apiService) { }

    Vrequired(input) {
        return this.regForm.get(input).hasError('required');
    }

    ngOnInit() {
        this.regForm = this.formBuilder.group({
            name: ['', [Validators.required,
                Validators.pattern("^[a-zA-Zæøå ÆØÅ]+$"),
                Validators.minLength(2)
            ]],
            secnumber: ['', [Validators.required,
                Validators.pattern("^[0-9]{11}")
            ]],
            email: ['', [Validators.required,
                Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
            ]],
            phone: ['', [Validators.required,
                Validators.pattern("^[0-9]{8}")
            ]],
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
                    this.modal.title = "Succsess";
                    this.modal.message = JSON.stringify(result);
                    this.modal.open = true;
                    this.http = false;
                },
                err => {
                    this.modal.title = "Dette gikk galt";
                    this.modal.message = err;
                    this.modal.open = true;
                    this.http = false;
                }
            )
    }
}