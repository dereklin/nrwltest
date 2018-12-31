import { async, TestBed } from '@angular/core/testing';
import { Mytest2Module } from './mytest2.module';

describe('Mytest2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Mytest2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Mytest2Module).toBeDefined();
  });
});
