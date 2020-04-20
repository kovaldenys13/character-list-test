import { characterReducer, initialState } from './character.reducer';

describe('Character Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = characterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
