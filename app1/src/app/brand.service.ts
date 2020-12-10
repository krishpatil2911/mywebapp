import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = 'http://localhost:3000/brand'
  httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getBrands() {
    return this.httpClient.get(this.url)
  }
}