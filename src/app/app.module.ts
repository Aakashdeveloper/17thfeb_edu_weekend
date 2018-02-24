import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from  './app.component';
import {RoboComponent} from './robot.component';
import { ProductComponent } from './products/products.component';
import { ProductFilter } from "./products/product-filter.pipe";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        RoboComponent,
        ProductComponent,
        ProductFilter
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}