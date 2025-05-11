import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductDetailComponentComponent } from "../product-detail-component/product-detail-component.component";

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductDetailComponentComponent],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent implements OnInit {

  products: Product[];

  constructor() {

    this.products = [{
      name: "Crema di mandorle bianca",
      price: 11.50,
      description: '100% mandorle sgusciate'
    }, {
      name: "Mango Brooks essiccato a strisce bio",
      price: 20.00,
      description: 'Fruttato-dolce, succoso e irresistibilmente delizioso'
    }, {
      name: "Mix di frutta secca KoRo Premium",
      price: 22.50,
      description: 'Miscela perfetta per i buongustai della frutta secca'
    }, {
      name: "Datteri Medjoul con nocciolo",
      price: 49.50,
      description: 'Dolci come il caramello'
    }, {
      name: "Semi di chia bio",
      price: 10.75,
      description: 'Adatti per budini, pane, yogurt e molto altro'
    }];

  }

  ngOnInit(): void {

  }

  removeProduct(index: number) {
    this.products = this.products.splice(index, 1)
  }
}
