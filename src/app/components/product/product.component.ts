import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}
  public productList: any;
  ngOnInit(): void {
    this.apiService.getProduct().subscribe((data) => {
      this.productList = data;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }
}
