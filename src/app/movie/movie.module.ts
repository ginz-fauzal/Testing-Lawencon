import { NgModule } from '@angular/core'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { MovieRoutingModule } from './movie-routing.module'
import { MovieComponent } from './movie.component'
import { LayoutComponent } from './layout.component'
import { SharedModule } from '../shared.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MovieRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        MovieComponent,
    ]
})
export class MovieModule { }