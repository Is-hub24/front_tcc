import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCriarcontaComponent } from './logo-criarconta.component';

describe('LogoCriarcontaComponent', () => {
  let component: LogoCriarcontaComponent;
  let fixture: ComponentFixture<LogoCriarcontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCriarcontaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCriarcontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
