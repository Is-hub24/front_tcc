import { TestBed } from '@angular/core/testing';

import { ProdutosCartService } from './produtos-cart.service';

describe('ProdutosCartService', () => {
  let service: ProdutosCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
