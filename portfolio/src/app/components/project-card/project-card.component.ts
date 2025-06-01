import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() imgPosition: string = 'right';
  @Input() content: { title: string; description: string; imgUrl: string } = {
    title: '',
    description: '',
    imgUrl: '',
  };

  get projectCardType(): string {
    return this.imgPosition === 'right' ? 'img-right' : 'img-left';
  }
}
