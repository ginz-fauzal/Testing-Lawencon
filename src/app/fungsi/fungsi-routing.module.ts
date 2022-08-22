import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FungsiComponent } from './fungsi.component'
import { LayoutComponent } from './layout.component'

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: FungsiComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FungsiRoutingModule { }