import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosCartService } from '../../services/produtos-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  length: number = 0;

  constructor(private productCartService: ProdutosCartService) { }

  ngOnInit(): void {
    this.productCartService.totalItens$.subscribe(a => {
      this.length = a;
    });
    
    const totalItens = this.productCartService.getTotalItens();
    console.log(totalItens);

    if(totalItens) {
      this.length = totalItens;
      console.log("True");
      
    } else {
      console.log("False");
      
    }

  }
}
