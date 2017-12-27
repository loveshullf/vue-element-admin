import {isValidUsername } from '@/utils/validate';

test('test isValidUsername', () => {
    const username="admin";
    expect(isValidUsername(username)).toBe(true);
  })