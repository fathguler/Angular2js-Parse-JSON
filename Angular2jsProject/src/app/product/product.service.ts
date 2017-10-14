import { Injectable } from '@angular/core';
import { Product } from './product'
import { PRODUCTS } from './product-list.mock'

@Injectable()
export class ProductService {

  constructor() { }

  getProduct():Product[]{
    return PRODUCTS;
  }
}
