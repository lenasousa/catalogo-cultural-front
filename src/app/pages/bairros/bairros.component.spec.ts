import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BairrosComponent } from './bairros.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Evento } from '../../models/evento.model';

describe('BairrosComponent', () => {
  let component: BairrosComponent;
  let fixture: ComponentFixture<BairrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BairrosComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BairrosComponent);
    component = fixture.componentInstance;
  });

  it('deve agrupar eventos pelo nome do bairro e somar a quantidade', () => {
    const mockEventos: Evento[] = [
      { nome: 'Ev1', bairro: 'Pinheiros', zona: 'Oeste', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' },
      { nome: 'Ev2', bairro: 'Pinheiros', zona: 'Oeste', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' },
      { nome: 'Ev3', bairro: 'Lapa', zona: 'Oeste', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' }
    ];

    component.agruparPorBairro(mockEventos);

    expect(component.bairrosComEventos.length).toBe(2); // Pinheiros e Lapa

    const bairroPinheiros = component.bairrosComEventos.find(b => b.nome === 'Pinheiros');
    expect(bairroPinheiros?.quantidade).toBe(2); // Deve somar 2 eventos
  });
});
