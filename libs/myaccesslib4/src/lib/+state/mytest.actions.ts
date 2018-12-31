import { Action } from '@ngrx/store';
import { Entity } from './mytest.reducer';

export enum MytestActionTypes {
  LoadMytest = '[Mytest] Load Mytest',
  MytestLoaded = '[Mytest] Mytest Loaded',
  MytestLoadError = '[Mytest] Mytest Load Error'
}

export class LoadMytest implements Action {
  readonly type = MytestActionTypes.LoadMytest;
}

export class MytestLoadError implements Action {
  readonly type = MytestActionTypes.MytestLoadError;
  constructor(public payload: any) {}
}

export class MytestLoaded implements Action {
  readonly type = MytestActionTypes.MytestLoaded;
  constructor(public payload: Entity[]) {}
}

export type MytestAction = LoadMytest | MytestLoaded | MytestLoadError;

export const fromMytestActions = {
  LoadMytest,
  MytestLoaded,
  MytestLoadError
};
