import { Component } from '@angular/core';
import { HeroImageComponent } from "../../components/hero-image/hero-image.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [HeroImageComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
