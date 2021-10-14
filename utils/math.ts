type Cart =
  | {
      id: number;
      amount: number;
    }[];
type Products = {
  productId: number;
  productName: string;
  productPrice: number;
  productSize: string;
  productDesc: string;
}[];

export function getTotalCartValue(cart: Cart, products: Products) {
  return (
    cart.reduce((accumulator, cookieProduct) => {
      return (accumulator =
        accumulator +
        cookieProduct.amount * products[cookieProduct.id - 1].productPrice);
    }, 0) / 100
  ).toFixed(2);
}

export function updateAmountInCart(
  cart: Cart,
  idOfProduct: number,
  amountOfProduct: number,
) {
  const newCart = cart.map((product) => {
    if (product.id !== idOfProduct) {
      return product;
    } else {
      return { id: product.id, amount: amountOfProduct };
    }
  });
  return newCart;
}
