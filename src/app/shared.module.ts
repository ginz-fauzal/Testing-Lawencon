import { NgModule } from '@angular/core'
import { NavbarComponent } from './_components/navbar.component'
import { FooterComponent } from './_components/footer.component'

import { CommonModule } from '@angular/common'
import {RouterModule} from '@angular/router'

@NgModule({
 imports:      [ CommonModule,RouterModule ],
 declarations: [ NavbarComponent,FooterComponent ],
 exports:      [ NavbarComponent,FooterComponent ]
})
export class SharedModule { }
