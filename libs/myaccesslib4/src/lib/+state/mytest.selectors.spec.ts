import { Entity, MytestState } from './mytest.reducer';
import { mytestQuery } from './mytest.selectors';

describe('Mytest Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMytestId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createMytest = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      mytest: {
        list: [
          createMytest('PRODUCT-AAA'),
          createMytest('PRODUCT-BBB'),
          createMytest('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Mytest Selectors', () => {
    it('getAllMytest() should return the list of Mytest', () => {
      const results = mytestQuery.getAllMytest(storeState);
      const selId = getMytestId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedMytest() should return the selected Entity', () => {
      const result = mytestQuery.getSelectedMytest(storeState);
      const selId = getMytestId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = mytestQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = mytestQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
