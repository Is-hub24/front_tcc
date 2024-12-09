import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosCartService } from '../../../services/produtos-cart.service';
import { IProdutoCart } from '../../../models/produtoCart.model';

@Component({
  selector: 'app-cart-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-area.component.html',
  styleUrl: './cart-area.component.scss'
})
export class CartAreaComponent implements OnInit{
  cartProducts!: Array<IProdutoCart>;
  totalPrice?: number;
  length?: number;

  constructor(private produtosCartService: ProdutosCartService) { }
  
  ngOnInit(): void {
    this.cartProducts = this.produtosCartService.getCartProducts();
    this.loadTotalPrice();
    this.loadLength();
  }

  loadProductsCart() {
    this.cartProducts = this.produtosCartService.getCartProducts();
  }

  loadTotalPrice() {
    this.totalPrice = this.produtosCartService.getTotalPrice();
  }

  loadLength() {
    this.length = this.produtosCartService.getLength();
  }

  decreaseQuantity(id: bigint): void {
    this.produtosCartService.decreaseQuantity(id);
    this.loadProductsCart();
    this.loadTotalPrice();
    this.loadLength();
  }

  addQuantity(id: bigint): void {
    this.produtosCartService.addQuantity(id);
    this.loadProductsCart()
    this.loadTotalPrice();
  }

  removeCart(id: bigint): void {
    this.produtosCartService.removeCart(id);
    this.loadProductsCart();
    this.loadTotalPrice();
    this.loadLength();
  }
}
