import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const productModule = () => import('./product/product.module').then(x => x.ProductModule)

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product', loadChildren: productModule},
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }