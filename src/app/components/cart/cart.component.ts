import { Component } from '@angular/core';
import { CartAreaComponent } from "./cart-area/cart-area.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartAreaComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
