import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { ProductListQuery, ProductQuery } from '@product-list/types-lib';
import { GET_PRODUCT, GET_PRODUCTS } from '../../services-lib.graphql';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private apollo: Apollo) {}

  getProducts(): Observable<ApolloQueryResult<ProductListQuery>> {
    return this.apollo.query<ProductListQuery>({
      query: GET_PRODUCTS,
    });
  }

  getRelatedProducts(): Observable<ApolloQueryResult<ProductListQuery>> {
    return this.apollo.query<ProductListQuery>({
      query: GET_PRODUCTS,
    });
  }

  getProduct(id: string): Observable<ApolloQueryResult<ProductQuery>> {
    return this.apollo.query<ProductQuery>({
      query: GET_PRODUCT,
      variables: {
        _id: id,
      },
    });
  }
}
