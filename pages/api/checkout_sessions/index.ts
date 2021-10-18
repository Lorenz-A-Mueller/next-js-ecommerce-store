import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const domainURL = process.env.BASE_URL;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.send({
      error: 'Method needs to be POST',
    });
  }

  const { lineItems } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    locale: 'en',
    line_items: lineItems,
    success_url: `${domainURL}/success`,
    cancel_url: `${domainURL}/cart`,
  });

  res.send({
    sessionId: session.id,
  });
  console.log('res.statusCode', res.statusCode);
}
