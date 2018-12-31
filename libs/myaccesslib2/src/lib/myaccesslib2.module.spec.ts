import { async, TestBed } from '@angular/core/testing';
import { Myaccesslib2Module } from './myaccesslib2.module';

describe('Myaccesslib2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Myaccesslib2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Myaccesslib2Module).toBeDefined();
  });
});
