import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-bairros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bairros.component.html',
  styleUrl: './bairros.component.scss'
})
export class BairrosComponent implements OnInit {
  zonaSelecionada: string = '';
  bairrosComEventos: { nome: string, zona: string, quantidade: number }[] = [];

  private route = inject(ActivatedRoute);
  private eventoService = inject(EventoService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.zonaSelecionada = params['zona'] || '';
      this.carregarBairros();
    });
  }

  carregarBairros(): void {
    this.eventoService.getEventos().subscribe({
      next: (eventos) => {
        // Filtra para exibir APENAS os eventos da zona selecionada na Home
        const eventosDaZona = this.zonaSelecionada
          ? eventos.filter(e => e.zona === this.zonaSelecionada)
          : eventos;

        this.agruparPorBairro(eventosDaZona);
        this.cdr.detectChanges();
      }
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
