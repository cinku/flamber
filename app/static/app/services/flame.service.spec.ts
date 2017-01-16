/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlameService } from './flame.service';

describe('FlameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlameService]
    });
  });

  it('should ...', inject([FlameService], (service: FlameService) => {
    expect(service).toBeTruthy();
  }));
});
