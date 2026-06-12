import { Component, HostListener } from '@angular/core';
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
  mostrarBotaoTopo: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarBotaoTopo = window.scrollY > 300;
  }

  voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  abrirSugestao(): void {
    this.statusModalSugestao = true;
  }

  fecharSugestao(): void {
    this.statusModalSugestao = false;
  }
}
