import { Component } from '@angular/core';
import { CriarContaScreenComponent } from "./criar-conta-screen/criar-conta-screen.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CriarContaScreenComponent, CertificatesComponent, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
