import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductComponent } from './product.component'
import { LayoutComponent } from './layout.component'

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ProductComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }