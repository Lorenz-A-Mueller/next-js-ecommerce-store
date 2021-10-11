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

export function updateAmountInCart(cart, idOfProduct, amountOfProduct) {
  const newCart = cart.map((product) => {
    if (product.id !== idOfProduct) {
      return product;
    } else {
      return { id: product.id, amount: amountOfProduct };
    }
  });
  return newCart;
}
