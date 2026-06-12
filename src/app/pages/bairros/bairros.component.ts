import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-bairros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bairros.component.html',
})
export class BairrosComponent implements OnInit {
  bairrosComEventos: { nome: string, zona: string, quantidade: number }[] = [];
  private eventoService = inject(EventoService);

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe({
      next: (eventos) => this.agruparPorBairro(eventos)
    });
  }

  agruparPorBairro(eventos: Evento[]): void {
    const agrupado = eventos.reduce((acc, evento) => {
      if (!acc[evento.bairro]) {
        acc[evento.bairro] = { nome: evento.bairro, zona: evento.zona, quantidade: 0 };
      }
      acc[evento.bairro].quantidade++;
      return acc;
    }, {} as Record<string, { nome: string, zona: string, quantidade: number }>);

    this.bairrosComEventos = Object.values(agrupado).sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
