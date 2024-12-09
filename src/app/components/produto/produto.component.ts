import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ProdutoAreaComponent } from "./produto-area/produto-area.component";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [FooterComponent, ProdutoAreaComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent{
}
