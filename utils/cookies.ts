import Cookies from 'js-cookie';

type Cart =
  | {
      id: number;
      amount: number;
    }[];

export function getCookies(key: string) {
  try {
    return JSON.parse(Cookies.get(key)!);
  } catch (err) {
    return undefined;
  }
}

export function setCookies(key: string, value: any) {
  Cookies.set(key, JSON.stringify(value));
  return;
}

export function updateAmountInCart(
  cart: Cart,
  idOfProduct: number,
  amountOfProduct: number,
): Cart {
  const newCart = cart.map((product) => {
    if (product.id !== idOfProduct) {
      return product;
    } else {
      return { id: product.id, amount: amountOfProduct };
    }
  });
  return newCart;
}
