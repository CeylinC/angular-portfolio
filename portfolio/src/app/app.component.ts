import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HeroImageComponent } from "./components/hero-image/hero-image.component";
import { ProjectCardComponent } from "./components/project-card/project-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, HeroImageComponent, ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  onClick() : void {
    console.log("hello world")
  }
}
