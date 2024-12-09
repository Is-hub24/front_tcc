import { Component } from '@angular/core';
import { DiscoverComponent } from "../discover/discover.component";
import { PopularsComponent } from "../populars/populars.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverComponent, PopularsComponent, AboutusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
