import { async, TestBed } from '@angular/core/testing';
import { Myaccesslib4Module } from './myaccesslib4.module';

describe('Myaccesslib4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Myaccesslib4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Myaccesslib4Module).toBeDefined();
  });
});
