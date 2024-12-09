import { Injectable } from '@angular/core';
import { IProdutoCart } from '../models/produtoCart.model';
import { BehaviorSubject } from 'rxjs';
import { IProduto1 } from '../models/produto1.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosCartService {
  private cartProducts: Array<IProdutoCart> = [
    {id: BigInt(9999), name: "Shirt", image: {"id": BigInt(999),
            "fileName": "bloquinho_tcc.webp",
            "fileType": "image/webp",
            "fileData": ""
        }, description: "asa", quantity: 1, price: 1222},

  ];

  private totalItens = new BehaviorSubject<number>(0);

  totalItens$ = this.totalItens.asObservable();

  constructor() { }

  addProduct(product: IProduto1, quantity: number) {
    const findProduct = this.cartProducts.find(value => value.id == product.id_produtos);
    if(findProduct) {
      
      if (quantity > 1) {
        console.log(findProduct.quantity + " " + quantity);
        
        console.log(findProduct.quantity)
        findProduct.quantity = Number(findProduct.quantity) + Number(quantity);
        console.log(findProduct.quantity)
      } else {
        findProduct.quantity++
      }
      this.updateTotalItens();
      return;
    }

    const newProduct = {
      id: product.id_produtos,
      name: product.nome,
      image: product.image,
      description: product.descricao,
      quantity: Number(quantity),
      price: product.preco
    }

    this.cartProducts.push(newProduct);
    this.updateTotalItens();
  }

  getCartProducts(): Array<IProdutoCart> {
    return this.cartProducts;
  }

  decreaseQuantity(id: bigint): void {
    let a = this.cartProducts.find((value) => {
      return value.id == id;
    })

    if(a) {
      a.quantity--;
      if(a.quantity <= 0) {
        this.removeCart(a.id);
      } else {
        this.updateTotalItens();
      }
    }
  }

  addQuantity(id: bigint): void {
    let a = this.cartProducts.find((value) => {
      return value.id == id;
    })

    if(a) {
      a.quantity++;
    }

    this.updateTotalItens();
  }

  removeCart(id: bigint): void {
    this.cartProducts = this.cartProducts.filter(value => value.id !== id);

    this.updateTotalItens();
  }

  getTotalPrice() {
    return this.cartProducts.reduce((ac, prod) => {
      return ac + (prod.price * prod.quantity);
    }, 0) 
  }

  getLength(): number {
    return this.cartProducts.length;
  }

  getTotalItens(): number {
    const total = this.cartProducts.reduce((ac, prod) => {
      return ac + prod.quantity
    }, 0);

    return total;
  }

  private updateTotalItens() {
    const total = this.cartProducts.reduce((ac, prod) => {
      return ac + prod.quantity
    }, 0);

    this.totalItens.next(total);
  }
}
