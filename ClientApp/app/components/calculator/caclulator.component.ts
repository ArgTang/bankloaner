import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'calculator',
    templateUrl: './caclulator.component.html',
    styleUrls: ['./caclulator.component.scss']
})
export class CalculatorComponent {
    
    requriredmessage = 'Dette feltet må være fylt ut!';

    @Input() data: string;
    @Output() dataEmitter = new EventEmitter<string>();

    interestrate: number  = 7;

    calcForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.calcForm = this.formBuilder.group({
            amount: ['', Validators.required],
            time: ['', Validators.required],
        });

        this.calcForm.valueChanges.subscribe(value => {
            this.calc();
        });
    }

    calc() {
        if(this.calcForm.status === "INVALID") {
            return;
        } 
        const value = this.calcForm.value;  

        let above = (this.interestrate/100)*value['amount'];
        let below = 1- Math.pow((1 + this.interestrate/100), -1*value['time']);
        
        let yearly = Math.round(above/below);
        let years = Math.round(value['amount']/yearly);

        this.data = `Betalingen blir ${yearly} i året i ${years} år`;
        this.dataEmitter.emit(this.data);
    }
}