import { TestBed, inject } from '@angular/core/testing';

import { EmpservicesService } from './empservices.service';

describe('EmpservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpservicesService]
    });
  });

  it('should be created', inject([EmpservicesService], (service: EmpservicesService) => {
    expect(service).toBeTruthy();
  }));
});
