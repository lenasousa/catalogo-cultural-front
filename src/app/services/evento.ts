import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  // A URL da sua API C#
  private apiUrl = 'http://localhost:5162/api/eventos';

  constructor(private http: HttpClient) { }

  // Método para buscar a lista de eventos da API (Substitui o antigo data.js)
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  // Método para enviar uma nova sugestão de espaço para a API
  adicionarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }
}
