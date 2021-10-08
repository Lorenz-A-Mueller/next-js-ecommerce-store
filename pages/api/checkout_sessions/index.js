import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.send({
      error: 'Method need to be POST',
    });
  }
  const domainURL = 'http://localhost:3000';

  const { lineItems } = req.body;

  const pmTypes = ['card'];
  const session = await stripe.checkout.sessions.create({
    payment_method_types: pmTypes,
    mode: 'payment',
    locale: 'en',
    line_items: lineItems,
    success_url: `${domainURL}/success`,
    cancel_url: `${domainURL}/cart`,
  });

  res.send({
    sessionId: session.id,
  });
}
