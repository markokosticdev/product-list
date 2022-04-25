import {Component, Input, OnInit} from '@angular/core';
import {Category, Product} from '@product-list/types-lib';

@Component({
  selector: 'product-related [category] [current]',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss'],
})
export class ProductRelatedComponent implements OnInit{
  @Input() category!: Category;
  @Input() current!: Product;

  related!: Product[]

  ngOnInit(): void {
    this.related = this.category.products.filter(product => product._id != this.current._id).slice(0, 3)
  }
}
