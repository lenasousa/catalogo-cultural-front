import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  zonasComEventos: { nome: string, quantidadeBairros: number }[] = [];
  private eventoService = inject(EventoService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe({
      next: (eventos) => {
        this.agruparPorZona(eventos);
        this.cdr.detectChanges();
      }
    });
  }

  agruparPorZona(eventos: Evento[]): void {
    const zonasMap = new Map<string, Set<string>>();

    eventos.forEach(e => {
      if (!zonasMap.has(e.zona)) {
        zonasMap.set(e.zona, new Set<string>());
      }
      zonasMap.get(e.zona)!.add(e.bairro);
    });

    this.zonasComEventos = Array.from(zonasMap.entries()).map(([zona, bairros]) => ({
      nome: zona,
      quantidadeBairros: bairros.size
    })).sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
