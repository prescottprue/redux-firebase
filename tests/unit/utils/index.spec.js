import { createCallable, pathToArr, getDotStrPath } from '../../../src/utils';

describe('Utils:', () => {
  describe('createCallable', () => {
    it('returns original value wrapped in function', () => {
      expect(createCallable(['test'])).to.be.a.function;
    });
    it('returns function if provided', () => {
      const spy = () => {};
      expect(createCallable(spy)).to.have.equal(spy);
    });
  });

  describe('pathtoArr', () => {
    it('converts valid path to array', () => {
      expect(pathToArr('/test')).to.include('test');
    });
  });

  describe('getDotStrPath', () => {
    it('converts valid path to array', () => {
      expect(getDotStrPath('test/some')).to.equal('test.some');
    });
  });
});
