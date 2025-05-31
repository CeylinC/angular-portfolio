import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HeroImageComponent } from "./components/hero-image/hero-image.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, HeroImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  onClick() : void {
    console.log("hello world")
  }
}
