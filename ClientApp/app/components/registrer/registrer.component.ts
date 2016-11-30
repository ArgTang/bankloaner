import { OnInit, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../Models/Person';
import { apiService } from '../../Services/apiService'

@Component({
    selector: 'registrer-comp',
    templateUrl: './registrer.component.html',
    styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent {
    
    requiredmessage = 'Dette feltet må være fylt ut!';

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

    register(){
        let vals = this.regForm.value;
        this.Person = {
            name: vals.name,
            secnumber: vals.secnumber,
            email: vals.email,
            phone: vals.phone
        }
        
        alert(JSON.stringify(this.Person) + JSON.stringify(this.loan));
    }
}