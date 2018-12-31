import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { MytestPartialState } from './mytest.reducer';
import {
  LoadMytest,
  MytestLoaded,
  MytestLoadError,
  MytestActionTypes
} from './mytest.actions';

@Injectable()
export class MytestEffects {
  @Effect() loadMytest$ = this.dataPersistence.fetch(
    MytestActionTypes.LoadMytest,
    {
      run: (action: LoadMytest, state: MytestPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new MytestLoaded([]);
      },

      onError: (action: LoadMytest, error) => {
        console.error('Error', error);
        return new MytestLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MytestPartialState>
  ) {}
}
