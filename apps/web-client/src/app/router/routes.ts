import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CategoryComponent } from '../components/category/category.component';
import { ProductComponent } from '../components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'categories/:category',
    component: CategoryComponent,
  },
  {
    path: 'categories/:category/products/:product',
    component: ProductComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];
