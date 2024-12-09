import { Injectable, OnInit } from '@angular/core';
import { IProduto } from '../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduto1 } from '../models/produto1.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService{
  private urlApi = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduto1[]> {
    return this.http.get<IProduto1[]>(`${this.urlApi}/produtos`);
  }
}
