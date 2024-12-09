import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, CertificatesComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
