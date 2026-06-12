import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BairrosComponent } from './bairros.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('BairrosComponent', () => {
  let component: BairrosComponent;
  let fixture: ComponentFixture<BairrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BairrosComponent],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BairrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
