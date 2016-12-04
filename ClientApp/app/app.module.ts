import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CalculatorComponent } from './components/calculator/caclulator.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { customerListComponent } from './components/customerList/customerList.component'

import { ClarityModule } from 'clarity-angular';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        CalculatorComponent,
        RegistrerComponent,
        customerListComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ClarityModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: CalculatorComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'customerlist', component: customerListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
