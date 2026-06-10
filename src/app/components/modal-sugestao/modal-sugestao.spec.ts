import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSugestao } from './modal-sugestao';

describe('ModalSugestao', () => {
  let component: ModalSugestao;
  let fixture: ComponentFixture<ModalSugestao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSugestao],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSugestao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
