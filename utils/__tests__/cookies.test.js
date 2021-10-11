/**
 * @jest-environment jsdom
 */

import Cookies from 'js-cookie';
import { getCookies, setCookies } from '../cookies.js';

test('Set cookies (setCookies helper-function)', () => {
  setCookies('test', 'abc');
  expect(JSON.parse(Cookies.get('test'))).toBe('abc');
});

test('Retrieve cookies (getCookies helper-function)', () => {
  Cookies.set('test', JSON.stringify('abc'));
  expect(getCookies('test')).toBe('abc');
});
