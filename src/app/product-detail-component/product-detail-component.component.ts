import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent implements OnInit {

  @Input() product: Product;
  @Input() idx: number;
  @Output("removeProduct") removeProduct: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() { }

}
