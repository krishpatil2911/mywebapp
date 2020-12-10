import { CategoryService } from './category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { BrandService } from './brand.service';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AboutUsComponent } from './about-us/about-us.component'

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'brand-list', component: BrandListComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'about-us', component: AboutUsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    BrandListComponent,
    MyOrdersComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService,
    CategoryService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
