import { Component, Input } from '@angular/core';
import { Category } from '@product-list/types-lib';

@Component({
  selector: 'category-tile [category]',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss'],
})
export class CategoryTileComponent {
  @Input() category!: Category;
}
