import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const movieModule = () => import('./movie/movie.module').then(x => x.MovieModule)
const profileModule = () => import('./fungsi/fungsi.module').then(x => x.FungsiModule)

const routes: Routes = [
    { path: '', redirectTo: '/movie', pathMatch: 'full' },
    { path: 'movie', loadChildren: movieModule},
    { path: 'fungsi', loadChildren: profileModule,},

    // otherwise redirect to movie
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }