import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;

  constructor(private cartService: ApiService) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartCourses();
  }

}
