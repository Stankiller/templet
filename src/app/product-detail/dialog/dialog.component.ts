import { Component, OnInit } from '@angular/core';
import { productObject } from './../../productObject';
import { CartService } from './../../cart.service';
import { ProductService } from '../../product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
