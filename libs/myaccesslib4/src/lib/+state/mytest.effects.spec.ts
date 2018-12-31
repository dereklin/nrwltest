import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { MytestEffects } from './mytest.effects';
import { LoadMytest, MytestLoaded } from './mytest.actions';

describe('MytestEffects', () => {
  let actions: Observable<any>;
  let effects: MytestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MytestEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(MytestEffects);
  });

  describe('loadMytest$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMytest() });
      expect(effects.loadMytest$).toBeObservable(
        hot('-a-|', { a: new MytestLoaded([]) })
      );
    });
  });
});
