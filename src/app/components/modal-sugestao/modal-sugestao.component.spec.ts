import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSugestaoComponent } from './modal-sugestao.component';

describe('ModalSugestaoComponent', () => {
  let component: ModalSugestaoComponent;
  let fixture: ComponentFixture<ModalSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSugestaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSugestaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
