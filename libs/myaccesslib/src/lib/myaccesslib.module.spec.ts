import { async, TestBed } from '@angular/core/testing';
import { MyaccesslibModule } from './myaccesslib.module';

describe('MyaccesslibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyaccesslibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyaccesslibModule).toBeDefined();
  });
});
