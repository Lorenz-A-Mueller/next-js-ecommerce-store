import { getTotalCartValue, updateAmountInCart } from '../math.js';

const testCart = [
  { id: 1, amount: 1 },
  { id: 2, amount: 2 },
  { id: 3, amount: 3 },
];

const testProducts = [
  {
    productId: 1,
    productName: 'Apples',
    productPrice: 89,
    productSize: 'piece',
    productDesc: 'Gala apples from Austria',
  },
  {
    productId: 2,
    productName: 'Radishes',
    productPrice: 123,
    productSize: 'bag',
    productDesc: ' ',
  },
  {
    productId: 3,
    productName: 'Bananas',
    productPrice: 204,
    productSize: 'bundle',
    productDesc: ' ',
  },
];

test('Compute total prize value of cart correctly', () => {
  expect(getTotalCartValue(testCart, testProducts)).toBe('9.47');
});

// **********

const cart = [
  { id: 1, amount: 1 },
  { id: 2, amount: 2 },
];

test('Correctly update the amount of a product that already was in the cart - in cart.js', () => {
  expect(updateAmountInCart(cart, 2, 4)).toStrictEqual([
    { id: 1, amount: 1 },
    { id: 2, amount: 4 },
  ]);
});
