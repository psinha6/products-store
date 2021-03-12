import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'product-description/:productId',
  component: ProductDescComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
