import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MYTEST_FEATURE_KEY,
  initialState as mytestInitialState,
  mytestReducer
} from './+state/mytest.reducer';
import { MytestEffects } from './+state/mytest.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(MYTEST_FEATURE_KEY, mytestReducer, {
      initialState: mytestInitialState
    }),
    EffectsModule.forFeature([MytestEffects])
  ]
})
export class Myaccesslib4Module {}
