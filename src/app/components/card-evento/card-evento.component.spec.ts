import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEventoComponent } from './card-evento.component';
import { Evento } from '../../models/evento.model';

describe('CardEventoComponent', () => {
  let component: CardEventoComponent;
  let fixture: ComponentFixture<CardEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEventoComponent);
    component = fixture.componentInstance;

    const mockEvento: Evento = {
      nome: 'Teste de Teste',
      tipo: 'Festival',
      bairro: 'Centro',
      endereco: 'Rua Mockada, 123',
      descricao: 'Apenas para passar no teste',
      zona: 'Central',
      gratuito: true,
      valor: 'R$ 00,00',
      data: '2026-01-01',
      site: ''
    };

    component.evento = mockEvento;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
