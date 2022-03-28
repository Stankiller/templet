import { Component, OnInit } from '@angular/core';
import { productObject } from './../productObject';
import { CartService } from './../cart.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  product_id : productObject | undefined;
  product: productObject | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private cart: CartService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductDetail(id)
      .subscribe((product: productObject | undefined) => this.product = product);
  }

  addToCart(product: productObject): void{
    this.cart.addToCart(product);
  }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {}
