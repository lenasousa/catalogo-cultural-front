import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento.model';
import { CardEventoComponent } from '../../components/card-evento/card-evento.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardEventoComponent],
  templateUrl: './eventos.component.html'
})
export class EventosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventoService = inject(EventoService);

  bairroSelecionado: string = '';
  todosEventosdoBairro: Evento[] = [];
  eventosFiltrados: Evento[] = [];

  // Estados dos filtros
  filtroTipo: string = 'todos';
  filtroValor: string = 'todos';
  termoBusca: string = '';

  // Estado do Modal de Detalhes
  eventoSelecionado: Evento | null = null;
  exibirModalDetalhes: boolean = false;

  ngOnInit(): void {
    // Captura o parâmetro 'bairro' enviado via QueryString da página de bairros
    this.route.queryParams.subscribe(params => {
      this.bairroSelecionado = params['bairro'] || '';
      this.carregarEventos();
    });
  }

  carregarEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (dados) => {
        // Filtra inicialmente apenas os eventos pertencentes ao bairro selecionado
        this.todosEventosdoBairro = dados.filter(e => e.bairro === this.bairroSelecionado);
        this.aplicarFiltros();
      }
    });
  }

  setFiltroTipo(tipo: string): void {
    this.filtroTipo = tipo;
    this.aplicarFiltros();
  }

  setFiltroValor(valor: string): void {
    this.filtroValor = valor;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let resultado = [...this.todosEventosdoBairro];

    // filtro por Tipo de Evento
    if (this.filtroTipo !== 'todos') {
      resultado = resultado.filter(e => e.tipo.toLowerCase().includes(this.filtroTipo.toLowerCase()));
    }

    // filtro por Valor (Gratuito / Pago)
    if (this.filtroValor === 'gratuito') {
      resultado = resultado.filter(e => e.gratuito === true || e.valor === 'R$ 00,00' || e.valor.toLowerCase().includes('grátis'));
    } else if (this.filtroValor === 'pago') {
      resultado = resultado.filter(e => e.gratuito === false && e.valor !== 'R$ 00,00' && !e.valor.toLowerCase().includes('grátis'));
    }

    // filtro por Barra de Pesquisa (Nome ou Descrição)
    if (this.termoBusca.trim() !== '') {
      const termo = this.termoBusca.toLowerCase();
      resultado = resultado.filter(e =>
        e.nome.toLowerCase().includes(termo) ||
        e.descricao.toLowerCase().includes(termo)
      );
    }

    this.eventosFiltrados = resultado;
  }

  abrirDetalhes(evento: Evento): void {
    this.eventoSelecionado = evento;
    this.exibirModalDetalhes = true;
  }

  fecharDetalhes(): void {
    this.eventoSelecionado = null;
    this.exibirModalDetalhes = false;
  }
}
