import { NgModule } from '@angular/core'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { ProductRoutingModule } from './product-routing.module'
import { ProductComponent } from './product.component'
import { LayoutComponent } from './layout.component'
import { SharedModule } from '../shared.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ProductRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        ProductComponent
    ]
})
export class ProductModule { }