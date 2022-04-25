import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryQuery } from '@product-list/types-lib';
import { CategoryService } from '@product-list/services-lib';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  data$: Observable<ApolloQueryResult<CategoryQuery>> | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('category');

    if (categoryId) {
      this.data$ = this.categoryService.getCategory(categoryId);
    } else {
      this.router.navigate(['/']);
    }
  }
}

// ### Category View / Product List
// - A list of example products with random data
// - Each product will link to an individual product view for more info
