import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from  './app.component';
import {RoboComponent} from './robot.component';
import { ProductComponent } from './products/products.component';
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        AppComponent,
        RoboComponent,
        ProductComponent,
        ProductFilter,
        StarComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}