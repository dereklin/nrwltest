import { async, TestBed } from '@angular/core/testing';
import { MytestModule } from './mytest.module';

describe('MytestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MytestModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MytestModule).toBeDefined();
  });
});
