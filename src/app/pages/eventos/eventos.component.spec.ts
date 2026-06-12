import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosComponent } from './eventos.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Evento } from '../../models/evento.model';

describe('EventosComponent', () => {
  let component: EventosComponent;
  let fixture: ComponentFixture<EventosComponent>;

  const mockEventos: Evento[] = [
    { nome: 'Show de Rock', tipo: 'Show', descricao: 'Música alta', gratuito: false, valor: 'R$ 50,00', bairro: 'Centro', zona: '', endereco: '', data: '' },
    { nome: 'Exposição de Arte', tipo: 'Exposição', descricao: 'Quadros clássicos', gratuito: true, valor: 'R$ 00,00', bairro: 'Centro', zona: '', endereco: '', data: '' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosComponent);
    component = fixture.componentInstance;
    component.todosEventosdoBairro = mockEventos;
  });

  it('deve filtrar eventos pela barra de pesquisa', () => {
    component.termoBusca = 'Rock';
    component.aplicarFiltros();
    expect(component.eventosFiltrados.length).toBe(1);
    expect(component.eventosFiltrados[0].nome).toBe('Show de Rock');
  });

  it('deve filtrar eventos pelo tipo', () => {
    component.filtroTipo = 'Exposição';
    component.aplicarFiltros();
    expect(component.eventosFiltrados.length).toBe(1);
    expect(component.eventosFiltrados[0].tipo).toBe('Exposição');
  });

  it('deve filtrar eventos gratuitos', () => {
    component.filtroValor = 'gratuito';
    component.aplicarFiltros();
    expect(component.eventosFiltrados.length).toBe(1);
    expect(component.eventosFiltrados[0].gratuito).toBe(true);
  });
});
