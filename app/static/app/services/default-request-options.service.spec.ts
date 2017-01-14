/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultRequestOptionsService } from './default-request-options.service';

describe('DefaultRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultRequestOptionsService]
    });
  });

  it('should ...', inject([DefaultRequestOptionsService], (service: DefaultRequestOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
