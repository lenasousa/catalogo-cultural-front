import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../services/evento.service'; // Confirma se o caminho está correto
import { Evento } from '../../models/evento.model';
import { CardEventoComponent } from '../../components/card-evento/card-evento.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardEventoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  eventos: Evento[] = [];
  private eventoService = inject(EventoService);

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (dados) => {
        this.eventos = dados;
        console.log('Eventos recebidos da API:', this.eventos);
      },
      error: (erro) => {
        console.error('Erro ao comunicar com a API:', erro);
      }
    });
  }
}
