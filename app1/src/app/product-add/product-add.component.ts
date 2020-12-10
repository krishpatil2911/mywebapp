import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { ProductService } from '../product.service';
import { report } from 'process';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title = ''
  description = ''
  category = 0
  brand = 1
  price = 1


  categories = []
  brands = []

  productService: ProductService
  brandService: BrandService
  categoryService: CategoryService

  constructor(
    productService: ProductService,
    brandService: BrandService,
    categoryService: CategoryService) {

    this.productService = productService
    this.brandService = brandService
    this.categoryService = categoryService
  }


  ngOnInit(): void {
    console.log('inside onInit()')
    this.loadData()
  }

  loadData() {
    // get the list of categories
    this.categoryService
      .getCategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
        } else {
          console.log(response['error'])
        }
      })

    // get the list of brands
    this.brandService
      .getBrands()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.brands = response['data']
        } else {
          console.log(response['error'])
        }
      })
  }
  onSave() {
    // console.log(this.title)
    // console.log(this.description)
    // console.log(this.price)
    // console.log(this.category)
    // console.log(this.brand)
    this.productService
      .createProduct(this.title, this.description, this.price, this.category, this.brand)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('product added successfully')
        } else {
          console.log(response['error'])
        }
      })
  }

  onCancel() {

  }

}
