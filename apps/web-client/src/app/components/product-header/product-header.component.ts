import {Component, Input, OnInit} from '@angular/core';
import { Product } from '@product-list/types-lib';
import {CountdownService} from "@product-list/services-lib";

@Component({
  selector: 'product-header [product]',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
})
export class ProductHeaderComponent implements OnInit{
  @Input() product!: Product;
  countdown!: string

  constructor(
    private countdownService: CountdownService
  ) {
    this.countdown = '00h:00m:00s'
  }

  ngOnInit(): void {
    this.countdownService.getCounter(121212)
      .subscribe(current => this.countdown = current)
  }
}
