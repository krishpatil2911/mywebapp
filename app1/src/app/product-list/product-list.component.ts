import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productService:ProductService
  products = []
  constructor(productService:ProductService) { 

    this.productService=productService
  }

  ngOnInit(): void {
  }
  onDelete(product) {
    this.productService
      .deleteProduct(product['id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('deleted successfully')
        } else {
          console.log(response['error'])
        }
      })
  }
  loadProducts() {
    const request=this.productService.getProducts()
    request.subscribe(response => {
      if (response['status'] == 'success') {
        this.products = response['data']
      }
    })
    //this.products.push(this.productService.getProducts())
  }

}
