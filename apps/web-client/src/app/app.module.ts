import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './router/app-router.module';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ServicesLibModule } from '@product-list/services-lib';
import { CategoryTileComponent } from './components/category-tile/category-tile.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { ProductBodyComponent } from './components/product-body/product-body.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    ProductTileComponent,
    CategoryTileComponent,
    ProductTileComponent,
    ProductHeaderComponent,
    ProductBodyComponent,
    ProductRelatedComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    ServicesLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
