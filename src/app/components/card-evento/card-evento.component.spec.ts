import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventoComponent } from './card-evento';

describe('CardEventoComponent', () => {
  let component: CardEventoComponent;
  let fixture: ComponentFixture<CardEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEventoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
