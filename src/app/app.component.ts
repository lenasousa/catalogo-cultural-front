import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ModalSugestaoComponent } from './components/modal-sugestao/modal-sugestao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ModalSugestaoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  statusModalSugestao: boolean = false;

  abrirSugestao(): void {
    this.statusModalSugestao = true;
  }

  fecharSugestao(): void {
    this.statusModalSugestao = false;
  }
}
