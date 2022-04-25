import { Component, Input } from '@angular/core';
import { Product } from '@product-list/types-lib';

@Component({
  selector: 'product-header [product]',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
})
export class ProductHeaderComponent {
  @Input() product!: Product;
}
