import { TestBed } from '@angular/core/testing';

import { CartService } from './panier.service';

describe('PanierService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
