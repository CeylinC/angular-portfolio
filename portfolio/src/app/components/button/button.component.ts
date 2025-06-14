import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'filled' | 'ghost' = 'filled';
  @Input() onClick: () => void = () => {};

  get buttonType(): string {
    return this.type === 'ghost' ? 'button-ghost' : 'button-filled';
  }
}
