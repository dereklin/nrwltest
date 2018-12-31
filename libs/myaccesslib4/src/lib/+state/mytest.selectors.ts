import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MYTEST_FEATURE_KEY, MytestState } from './mytest.reducer';

// Lookup the 'Mytest' feature state managed by NgRx
const getMytestState = createFeatureSelector<MytestState>(MYTEST_FEATURE_KEY);

const getLoaded = createSelector(
  getMytestState,
  (state: MytestState) => state.loaded
);
const getError = createSelector(
  getMytestState,
  (state: MytestState) => state.error
);

const getAllMytest = createSelector(
  getMytestState,
  getLoaded,
  (state: MytestState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getMytestState,
  (state: MytestState) => state.selectedId
);
const getSelectedMytest = createSelector(
  getAllMytest,
  getSelectedId,
  (mytest, id) => {
    const result = mytest.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const mytestQuery = {
  getLoaded,
  getError,
  getAllMytest,
  getSelectedMytest
};
