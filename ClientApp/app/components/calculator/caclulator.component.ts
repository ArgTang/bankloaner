import { OnInit, Component, EventEmitter, Input, Output, NgModule, NgModuleRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Loan } from '../Models/Loan';

@Component({
    selector: 'calculator',
    templateUrl: './caclulator.component.html',
    styleUrls: ['./caclulator.component.scss']    
})

export class CalculatorComponent {
    public validation = {
        required: 'Dette feltet må være fylt ut!',
        minlength: 'Dette feltet må være større enn 10 000',
        number: 'Dette feltet kan kun ha tall'
    };

    public requriredmessage = 'Dette feltet må være fylt ut!';

    public data = {
        monthly: 0,
        time: 0
    };
    private interestrate: number = 7/100;
    public showRegisterForm: boolean;

    loan: Loan;
    calcForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.calcForm = this.formBuilder.group({
            amount: ['', [Validators.required,
                         Validators.pattern("[0-9]{2,}")
                ]
            ],
            time: ['', [Validators.required,
                        Validators.pattern("^[0-9]+$")
                    ]
            ],
        });

        this.calcForm.valueChanges.subscribe(value => {
            if(this.calcForm.status === "INVALID") {
                return;
            } 

            this.calc();
            this.setLoan();
        });
    }

    calc() {
        const value = this.calcForm.value;  
        let above = this.interestrate*value['amount'];
        let below = 1- Math.pow((1 + this.interestrate), -value['time'])
        let monthly = Math.round((above/below)/12);

        this.data.monthly = monthly;
        this.data.time = value['time'];
        //this.data = `Lånet skal tilbakebetales med ${monthly} i måneden i ${value['time']} år`;
    }

    setLoan() {
        this.loan = {
            amount: this.calcForm.value.amount,
            time: this.calcForm.value.time
        }
    }

    showForm(){
        this.showRegisterForm = !this.showRegisterForm;
    }

    required(input) {
        return this.calcForm.get(input).hasError('required');
    }
}