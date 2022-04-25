import { Component, Input } from '@angular/core';
import { Product } from '@product-list/types-lib';

@Component({
  selector: 'product-tile [categoryId] [product]',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent {
  @Input() categoryId!: string;
  @Input() product!: Product;
}
