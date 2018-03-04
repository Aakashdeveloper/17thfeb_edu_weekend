import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductComponent } from "./products.component";
import { ProductFilter } from "./product-filter.pipe";
import { ProductDetail } from "./product-detail.component";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'products/:id',component:ProductDetail}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductFilter,
        ProductDetail
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{}