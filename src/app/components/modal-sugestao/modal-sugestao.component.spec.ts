import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSugestaoComponent } from './modal-sugestao.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('ModalSugestaoComponent', () => {
  let component: ModalSugestaoComponent;
  let fixture: ComponentFixture<ModalSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSugestaoComponent, FormsModule],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
