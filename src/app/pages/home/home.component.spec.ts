import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Evento } from '../../models/evento.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('deve agrupar eventos por zona e contar bairros únicos', () => {
    const mockEventos: Evento[] = [
      { nome: 'Ev1', zona: 'Sul', bairro: 'Moema', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' },
      { nome: 'Ev2', zona: 'Sul', bairro: 'Vila Olímpia', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' },
      { nome: 'Ev3', zona: 'Central', bairro: 'Centro', tipo: '', endereco: '', descricao: '', gratuito: true, valor: '', data: '' }
    ];

    component.agruparPorZona(mockEventos);

    expect(component.zonasComEventos.length).toBe(2); // Sul e Central

    const zonaSul = component.zonasComEventos.find(z => z.nome === 'Sul');
    expect(zonaSul?.quantidadeBairros).toBe(2); // Moema e Vila Olímpia

    const zonaCentral = component.zonasComEventos.find(z => z.nome === 'Central');
    expect(zonaCentral?.quantidadeBairros).toBe(1); // Apenas Centro
  });
});
