import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component'
import { ProductUpdateComponent } from './components/products/product-update/product-update.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { fromEventPattern } from 'rxjs'
import { ProductCreateComponent } from './components/products/product-create/product-create.component'
import { HomeComponent } from './view/home/home.component'
import { ProductsCrudComponent } from './view/products-crud/products-crud.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsCrudComponent,
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
