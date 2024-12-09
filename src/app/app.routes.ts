import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "cart", component: CartComponent},
    {path: "produto", component: ProdutoComponent},
    {path: "produto/:id", component: ProdutoComponent},
    {path: "login", component: LoginComponent}
];
