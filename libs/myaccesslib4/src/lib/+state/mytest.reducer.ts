import { MytestAction, MytestActionTypes } from './mytest.actions';

export const MYTEST_FEATURE_KEY = 'mytest';

/**
 * Interface for the 'Mytest' data used in
 *  - MytestState, and
 *  - mytestReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface MytestState {
  list: Entity[]; // list of Mytest; analogous to a sql normalized table
  selectedId?: string | number; // which Mytest record has been selected
  loaded: boolean; // has the Mytest list been loaded
  error?: any; // last none error (if any)
}

export interface MytestPartialState {
  readonly [MYTEST_FEATURE_KEY]: MytestState;
}

export const initialState: MytestState = {
  list: [],
  loaded: false
};

export function mytestReducer(
  state: MytestState = initialState,
  action: MytestAction
): MytestState {
  switch (action.type) {
    case MytestActionTypes.MytestLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
