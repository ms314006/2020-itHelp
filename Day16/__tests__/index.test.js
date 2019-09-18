import { add, sub } from '../src/utils/math';

describe('Check add', () => {
  beforeEach(() => {
    console.log('每次執行測試前執行哦');
  });

  afterAll(() => {
    console.log('所有測試結束後才看得見我');
  });

  test('Check the result of 5 + 2', () => {
    expect(add(5, 2)).not.toBe(8);
  });

  test('Check the result of 5 + 3', () => {
    expect(add(5, 3)).toBe(8);
  });
});

describe('Check sub', () => {
  test('Check the result of 5 - 2', () => {
    expect(sub(5, 2)).not.toBe(1);
  });

  test('Check the result of 5 - 3', () => {
    expect(sub(5, 3)).toBe(2);
  });
});
