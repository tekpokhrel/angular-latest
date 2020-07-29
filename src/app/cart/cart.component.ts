import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  formCheckOut;

  constructor( private cartService: CartService,
              private formBuilder: FormBuilder 
            ) {
              this.formCheckOut = this.formBuilder.group({
                name: '',
                address: ''
              });
             }

  ngOnInit(): void {
    this.items = this.cartService.getCartItem();
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.formCheckOut.reset();
    console.log("Your order has been submitted", customerData);
  }
}
