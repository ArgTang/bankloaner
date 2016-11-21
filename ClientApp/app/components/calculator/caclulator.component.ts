import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'calculator',
    templateUrl: './caclulator.component.html',
    styleUrls: ['./caclulator.component.scss']
})
export class CalculatorComponent {

    // calcForm: FormGroup;
    // constructor(private formBuilder: FormBuilder) {}

    // ngOnInit() {
    //     this.calcForm = this.formBuilder.group({
    //         amount: ['', Validators.required],
    //         time: ['', Validators.required],
    //         timeAccount: this.formBuilder.group({
    //             time: '',
    //             timeAccount: ''
    //         })
    //     });
    // }
}
