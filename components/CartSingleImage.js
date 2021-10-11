import { useState } from 'react';
import { updateAmountInCart } from '../utils/math';

export default function CartSingleImage(props) {
  const [changedAmount, setChangedAmount] = useState(0);

  function handleChange(event, initialAmount) {
    console.log('changedAmount in sinlge cart', changedAmount);
    const enteredValue = event.currentTarget.value;
    console.log('entered value', enteredValue);
    console.log('CHOSENPRODUCT.id', props.chosenProduct.id);

    // when first changed, set to the initial amount, then to the user input
    if (changedAmount === 0) {
      setChangedAmount(initialAmount);
    }
    if (enteredValue > 9) {
      setChangedAmount(9);
      props.setCart(updateAmountInCart(props.cart, props.chosenProduct.id, 9));
    } else if (enteredValue < 0) {
      setChangedAmount(1);

      props.setCart(updateAmountInCart(props.cart, props.chosenProduct.id, 1));

      // if dec. point is entered, round the number down immediately
    } else if (enteredValue.length > 1) {
      setChangedAmount(Math.floor(enteredValue));
      props.setCart(
        updateAmountInCart(
          props.cart,
          props.chosenProduct.id,
          Math.floor(enteredValue),
        ),
      );
    } else {
      setChangedAmount(enteredValue);
      props.setCart(
        updateAmountInCart(props.cart, props.chosenProduct.id, enteredValue),
      );
    }
  }

  function handleLostFocus(e) {
    if (e.currentTarget.value === '0' || e.currentTarget.value === '') {
      setChangedAmount(1);
      props.setCart(updateAmountInCart(props.cart, props.chosenProduct.id, 1));
    }
  }

  return (
    <div
      className="cart-single-image-container flex-container-center-content"
      key={`cart-single-image-container-${props.chosenProduct.id}`}
    >
      <div className="cart-single-image-image-container">
        <img
          src={`/product_images/${
            props.products[props.chosenProduct.id - 1].productId
          }.jpeg`}
          alt={props.products[props.chosenProduct.id - 1].productName}
          key={`cart-image-${props.chosenProduct.id}`}
        />
      </div>
      <div className="cart-single-image-text-container flex-container-center-content">
        <h2>{props.products[props.chosenProduct.id - 1].productName}</h2>
        <div className="cart-single-image-text-amount-container flex-container-center-content">
          <input
            type="number"
            value={
              changedAmount === 0 ? props.chosenProduct.amount : changedAmount // first take the amount from the cookie
            }
            onChange={(e) => handleChange(e, props.chosenProduct.amount)}
            min="1"
            max="9"
            step="1"
            onBlur={(e) => handleLostFocus(e)}
          />
          <p>
            {props.products[props.chosenProduct.id - 1].productSize}
            {(props.chosenProduct.amount > 1 && !changedAmount) ||
            changedAmount > 1
              ? 's'
              : ''}
          </p>
        </div>
      </div>
      <div className="cart-single-image-price-container">
        <p>
          {(
            (props.chosenProduct.amount *
              props.products[props.chosenProduct.id - 1].productPrice) /
            100
          ).toFixed(2)}
          €
        </p>
      </div>
      <div className="cart-single-image-delete-button-container background-image-cover">
        <button
          title="Delete this product from your cart"
          onClick={() => props.handleDeleteItemClick(props.index)}
          className="button-red"
        />
      </div>
    </div>
  );
}
