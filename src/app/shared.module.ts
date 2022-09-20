import { NgModule } from '@angular/core'
import { NavbarComponent } from './_components/navbar.component'
import { AlertComponent } from './_components/alert.component'

import { CommonModule } from '@angular/common'
import {RouterModule} from '@angular/router'

@NgModule({
 imports:      [ CommonModule,RouterModule ],
 declarations: [ NavbarComponent,AlertComponent],
 exports:      [ NavbarComponent,AlertComponent]
})
export class SharedModule { }
