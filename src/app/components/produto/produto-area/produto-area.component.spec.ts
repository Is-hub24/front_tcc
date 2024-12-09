import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAreaComponent } from './produto-area.component';

describe('ProdutoAreaComponent', () => {
  let component: ProdutoAreaComponent;
  let fixture: ComponentFixture<ProdutoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
