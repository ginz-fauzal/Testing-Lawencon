import { NgModule } from '@angular/core'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { FungsiRoutingModule } from './fungsi-routing.module'
import { FungsiComponent } from './fungsi.component'
import { LayoutComponent } from './layout.component'
import { SharedModule } from '../shared.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FungsiRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        FungsiComponent,
    ]
})
export class FungsiModule { }