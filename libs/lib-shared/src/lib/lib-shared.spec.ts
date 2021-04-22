
import { libShared } from './lib-shared';
//import { libShared } from '@lib/shared';

describe('libShared', () => {
  it('should work', () => {
    expect(libShared()).toEqual('lib-shared');
  });
});
