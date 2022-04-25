import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';
import { ProductService } from './services/product/product.service';
import { CategoryService } from './services/category/category.service';
import { CountdownService } from './services/countdown/countdown.service';

@NgModule({
  imports: [CommonModule, ApolloModule],
  providers: [CountdownService, CategoryService, ProductService],
})
export class ServicesLibModule {}
