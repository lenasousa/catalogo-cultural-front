import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSugestaoComponent } from './modal-sugestao.component';
import { provideHttpClient } from '@angular/common/http';

describe('ModalSugestaoComponent', () => {
  let component: ModalSugestaoComponent;
  let fixture: ComponentFixture<ModalSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSugestaoComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSugestaoComponent);
    component = fixture.componentInstance;

    (globalThis as any).spyOn(window, 'alert');
  });

  it('deve alertar erro se faltarem campos obrigatórios ao submeter', () => {
    // Esvazia campos obrigatórios
    component.novoEvento.nome = '';
    component.novoEvento.tipo = '';

    component.submeterFormulario();

    // Verifica se a mensagem de validação foi disparada
    expect(window.alert).toHaveBeenCalledWith('Por favor, preencha todos os campos obrigatórios.');
  });
});
