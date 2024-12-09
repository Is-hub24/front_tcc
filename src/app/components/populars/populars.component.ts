import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutosCartService } from '../../services/produtos-cart.service';
import { Router } from '@angular/router';
import { IProduto1 } from '../../models/produto1.model';

@Component({
  selector: 'app-populars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './populars.component.html',
  styleUrl: './populars.component.scss'
})
export class PopularsComponent implements OnInit{
  produtos?: Array<IProduto1>;

  constructor(private router: Router, private produtosService: ProdutosService, private produtosCartService: ProdutosCartService) { }

  ngOnInit(): void {
    this.produtosService.getProducts().subscribe(a => this.produtos = a); 
  }

  viewProduct(id: bigint) {
    this.router.navigate([`/produto/${id}`]);
  }
}
