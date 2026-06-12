import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EventoService } from './evento.service';
import { Evento } from '../models/evento.model';

describe('EventoService', () => {
  let service: EventoService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:5162/api/eventos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(EventoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve buscar a lista de eventos (GET)', () => {
    const mockEventos: Evento[] = [{ nome: 'Evento 1', tipo: 'Show', bairro: 'Centro', endereco: '', descricao: '', zona: 'Central', gratuito: true, valor: '', data: '', site: '' }];

    service.getEventos().subscribe(eventos => {
      expect(eventos.length).toBe(1);
      expect(eventos[0].nome).toBe('Evento 1');
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockEventos);
  });

  it('deve enviar um novo evento (POST)', () => {
    const novoEvento: Evento = { nome: 'Novo', tipo: 'Museu', bairro: 'Luz', endereco: '', descricao: '', zona: 'Central', gratuito: true, valor: '', data: '', site: '' };

    service.adicionarEvento(novoEvento).subscribe(res => {
      expect(res.nome).toBe('Novo');
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(novoEvento);
  });
});
