import Cookies from 'js-cookie';

export function getCookies(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setCookies(key, value) {
  Cookies.set(key, JSON.stringify(value));
  return;
}
