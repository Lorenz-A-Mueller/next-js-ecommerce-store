export function getTotalCartValue(cart, products) {
  return (
    cart.reduce((accumulator, cookieProduct) => {
      return (accumulator =
        accumulator +
        cookieProduct.amount * products[cookieProduct.id - 1].productPrice);
    }, 0) / 100
  ).toFixed(2);
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
