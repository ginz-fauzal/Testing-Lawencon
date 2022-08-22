import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MovieComponent } from './movie.component'
import { MovieDetailComponent } from './movie-detail.component'
import { LayoutComponent } from './layout.component'

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: MovieComponent },
            { path: 'detail', component: MovieDetailComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }