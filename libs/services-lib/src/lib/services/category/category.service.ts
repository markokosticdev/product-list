import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CategoryListQuery, CategoryQuery } from '@product-list/types-lib';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { GET_CATEGORIES, GET_CATEGORY } from '../../services-lib.graphql';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private apollo: Apollo) {}

  getCategories(): Observable<ApolloQueryResult<CategoryListQuery>> {
    return this.apollo.query<CategoryListQuery>({
      query: GET_CATEGORIES,
    });
  }

  getCategory(id: string): Observable<ApolloQueryResult<CategoryQuery>> {
    return this.apollo.query<CategoryQuery>({
      query: GET_CATEGORY,
      variables: {
        _id: id,
      },
    });
  }
}
