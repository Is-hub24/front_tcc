import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaScreenComponent } from './criar-conta-screen.component';

describe('CriarContaScreenComponent', () => {
  let component: CriarContaScreenComponent;
  let fixture: ComponentFixture<CriarContaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarContaScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarContaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
