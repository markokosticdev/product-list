import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';
import { CategoryService } from './services/category/category.service';
import { ProductService } from './services/product/product.service';

@NgModule({
  imports: [CommonModule, ApolloModule],
  providers: [CategoryService, ProductService],
})
export class ServicesLibModule {}
