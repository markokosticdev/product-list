import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryListQuery } from '@product-list/types-lib';
import { ApolloQueryResult } from '@apollo/client/core';
import { CategoryService } from '@product-list/services-lib';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data$: Observable<ApolloQueryResult<CategoryListQuery>> | undefined;

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.data$ = this.categoryService.getCategories();
  }
}
// ### Homepage
// - List of categories and the count of products within each
// - Categories will link to the list of products contained
