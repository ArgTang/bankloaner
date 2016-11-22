import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'registrer',
    templateUrl: './registrer.component.html',
    styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent {
    
    requiredmessage = 'Dette feltet må være fylt ut!';

    regForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.regForm = this.formBuilder.group({
            name: ['', Validators.required],
            secnumber: ['', Validators.required],
            email: ['', Validators.required],
            phone:['', Validators.required],
        });
    }
}