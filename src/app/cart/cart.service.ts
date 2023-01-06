import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private shared:SharedService) { }

  addSelectItemToCart(product:any){
    var products:any;
    products = localStorage.getItem("products");
    products = JSON.parse(products);
    if(!products){
      products = [];
    }
    products.push(product);
    console.log('produts',products);
    console.log('string',JSON.stringify(products));
    localStorage.setItem("products",JSON.stringify(products));
    this.shared.emitSelProduct.next(products.length);
  }
}