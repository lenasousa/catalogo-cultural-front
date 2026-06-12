import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-modal-sugestao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-sugestao.component.html',
  styleUrl: './modal-sugestao.component.scss'
})
export class ModalSugestaoComponent {
  private eventoService = inject(EventoService);

  @Input() exibirModal: boolean = false;
  @Output() fechar = new EventEmitter<void>();

  novoEvento: Evento = {
    nome: '',
    tipo: '',
    bairro: '',
    endereco: '',
    descricao: '',
    zona: '',
    gratuito: true,
    valor: 'R$ 00,00',
    data: new Date().toLocaleDateString('pt-BR'),
    site: '',
  };

  fecharModal(): void {
    this.fechar.emit();
  }

  submeterFormulario(): void {
    if (
      !this.novoEvento.nome ||
      !this.novoEvento.tipo ||
      !this.novoEvento.bairro ||
      !this.novoEvento.zona
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Dispara a chamada POST HTTP para a API C#
    this.eventoService.adicionarEvento(this.novoEvento).subscribe({
      next: (sucesso) => {
        alert('Obrigado pela sua sugestão! Espaço salvo com sucesso na memória da API.');
        this.fecharModal();
        this.novoEvento = {
          nome: '',
          tipo: '',
          bairro: '',
          endereco: '',
          descricao: '',
          zona: '',
          gratuito: true,
          valor: 'R$ 00,00',
          data: '',
          site: '',
        };
      },
      error: (erro) => {
        console.error('Erro ao enviar sugestão:', erro);
        alert('Falha ao registrar sugestão na API. Verifique a conectividade.');
      },
    });
  }
}
