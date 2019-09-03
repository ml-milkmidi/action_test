/**
 * @jest-environment node
 */

// import { add, sub } from '@/utils';


jest.setTimeout(20000);

describe('hello', () => {

  test('world', () => {
    expect(true).toBeTruthy();
  });

  /* test('util add', () => {
    expect(add(1,1)).toBe(2)
  }); */
});
