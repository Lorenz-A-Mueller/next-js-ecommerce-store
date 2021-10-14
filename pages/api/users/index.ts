import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../../utils/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const body = req.body;
    const createdUser = await createUser(body.newUser);
    return res.status(200).json(createdUser);
  } else {
    return res.status(405);
  }
}
