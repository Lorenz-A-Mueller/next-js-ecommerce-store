describe('Navigation', () => {
  const randomProductId = Math.ceil(Math.random() * 23);
  it('should navigate through the pages', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=logo-link]').click();
    cy.contains('Apples');
    cy.get(`[data-cy=product-${randomProductId}]`).click();
    cy.contains('Amounts to');
    cy.get('[data-cy=buy-product-button]').click();
    cy.wait(1000);
    cy.contains('Apples');
    cy.get('[data-cy=link-to-cart]').click();
    cy.contains('Delete all');
    cy.get('[data-cy=link-to-checkout]').click();
    cy.contains('Please Log In!');
    cy.wait(3000);
    cy.get('[data-cy=user-name-input]').type('test.test@gmail.com');
    cy.get('[data-cy=user-password-input]').type('MyTestPassword1');
    cy.get('[data-cy="log-in-button"]').click();
    cy.wait(2000);
    cy.contains('Delete all');

    //   // ***** Cannot keep testing after redirecting to Stripe...

    //   // cy.get('[data-cy=link-to-checkout]').click();
    //   // cy.wait(5000);
    //   // cy.get('#email').type('lorenzarthur91@gmail.com');
    //   // cy.get('#cardNumber').type('4242424242424242');
    //   // cy.get('#cardExpiry').type('12 / 22');
    //   // cy.get('#cardCvc').type('424');
    //   // cy.get('#billingName').type('Lorenz Mueller');
    //   // cy.get('.SubmitButton-IconContainer').click();
    //   // cy.wait(5000);
  });
  it('should be possible to buy a product, change its quantity in the cart and delete it again from there (verifying cookie)', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=logo-link]').click();
    cy.contains('Apples');
    cy.get(`[data-cy=product-${randomProductId}]`).click();
    cy.contains('Amounts to');
    cy.get('[data-cy=buy-product-button]').click();
    cy.wait(1000);
    cy.contains('Apples');
    cy.get('[data-cy=link-to-cart]').click();
    cy.contains('Delete all');
    cy.getCookie('cart').should(
      'have.property',
      'value',
      `[{%22id%22:${randomProductId}%2C%22amount%22:1}]`,
    );
    cy.get(`[data-cy=cart-input-field-${randomProductId}]`).type('9');
    cy.getCookie('cart').should(
      'have.property',
      'value',
      `[{%22id%22:${randomProductId}%2C%22amount%22:9}]`,
    );
    cy.get(`[data-cy=cart-delete-field-${randomProductId}]`).click();
    cy.getCookie('cart').should('have.property', 'value', '[]');
  });
});
