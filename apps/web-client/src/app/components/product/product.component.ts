import { Component, OnInit } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { CategoryQuery, ProductQuery } from '@product-list/types-lib';
import { CategoryService, ProductService } from '@product-list/services-lib';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  data$:
    | Observable<
        [ApolloQueryResult<CategoryQuery>, ApolloQueryResult<ProductQuery>]
      >
    | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryId = params['category'];
      const productId = params['product'];

      if (categoryId && productId) {
        this.data$ = zip(
          this.categoryService.getCategory(categoryId),
          this.productService.getProduct(productId)
        );
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}

// ### Individual Product view
// - Information about the product
// - Countdown (using RxJS) to midnight to let the user know if they order it today, it will be delivered tomorrow
// - Grid of 3x other products from same category (you can query products using the slug from URL). Show the image, name and link to that product page.
