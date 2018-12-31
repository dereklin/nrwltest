import { MytestLoaded } from './mytest.actions';
import {
  MytestState,
  Entity,
  initialState,
  mytestReducer
} from './mytest.reducer';

describe('Mytest Reducer', () => {
  const getMytestId = it => it['id'];
  let createMytest;

  beforeEach(() => {
    createMytest = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Mytest actions ', () => {
    it('should return set the list of known Mytest', () => {
      const mytests = [
        createMytest('PRODUCT-AAA'),
        createMytest('PRODUCT-zzz')
      ];
      const action = new MytestLoaded(mytests);
      const result: MytestState = mytestReducer(initialState, action);
      const selId: string = getMytestId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = mytestReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
