import { productObject } from './../productObject';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: productObject[] = this.cartService.getItems();
  items = this.cartService.getItems();
  displayedColumns: string[] = ['position', 'name', 'price', 'qty'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
