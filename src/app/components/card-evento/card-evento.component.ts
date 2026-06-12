import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-evento.component.html',
  styleUrl: './card-evento.component.scss'
})
export class CardEventoComponent {
  @Input() evento!: Evento;
}
