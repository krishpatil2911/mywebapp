import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient: HttpClient
  url = 'http://localhost:3000/product'
  // ProductService class is dependent on HttpClient
  // Angular will inject (pass) an object of HttpClient
  // while creating an object of this class
  constructor(httpClient: HttpClient) {

    this.httpClient=httpClient
  }

  getProducts(){
    const url='http://localhost:3000/product'
    return this.httpClient.get(url)
  //   const request=this.httpClient.get(url)
  //   const result=request.subscribe(response=>{
  //     if (response['status'] == 'success') {
  //       return response['data']
  //     } else {
        
  //     }
  //   })
  //   return result
  }
  createProduct(title: string, description: string, price: number, category: number, brand: number) {
    const body = {
      title: title,
      description: description,
      price: price,
      category: category,
      brand: brand
    }
    return this.httpClient.post(this.url, body)
  }
  deleteProduct(id: number) {
    // http://localhost:3000/product/1
    return this.httpClient.delete(this.url + "/" + id)
  }
}

// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }
// }

// const p1 = new Person('person1')