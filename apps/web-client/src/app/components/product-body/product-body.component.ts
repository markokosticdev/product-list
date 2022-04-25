import { Component, Input } from '@angular/core';
import { Product } from '@product-list/types-lib';

@Component({
  selector: 'product-body [product]',
  templateUrl: './product-body.component.html',
  styleUrls: ['./product-body.component.scss'],
})
export class ProductBodyComponent {
  @Input() product!: Product;
}
