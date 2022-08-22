import { NgModule } from '@angular/core'
import { NavbarComponent } from './_components/navbar.component'

import { CommonModule } from '@angular/common'
import {RouterModule} from '@angular/router'

@NgModule({
 imports:      [ CommonModule,RouterModule ],
 declarations: [ NavbarComponent],
 exports:      [ NavbarComponent]
})
export class SharedModule { }
