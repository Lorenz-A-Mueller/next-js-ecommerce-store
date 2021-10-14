describe('API call', () => {
  it('should receive a response body with statusCode 200 (POST request to Stripe API)', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/checkout_sessions',
      body: JSON.stringify({
        lineItems: [{ price: 'price_1JhvTLBogipG4BzCmKODicpT', quantity: '1' }],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log('response in test ', response);
      expect(response.status).to.eq(200);
    });
  });
});
