import { async, TestBed } from '@angular/core/testing';
import { MyModule } from './my.module';

describe('MyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyModule).toBeDefined();
  });
});
