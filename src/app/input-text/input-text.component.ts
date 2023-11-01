import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() label!: string;
  @Input() valor!: string;
  @Input() tipo: string = 'text';
}
