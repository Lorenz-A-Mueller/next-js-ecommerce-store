import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser, patchUser } from '../../../utils/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'DELETE') {
    const body = req.body;
    const deletedUser = await deleteUser(body);
    return res.status(200).json(deletedUser);
  }
  if (req.method === 'PATCH') {
    const body = req.body;
    const patchedUser = await patchUser(
      body.updatedUser[0],
      body.updatedUser[1],
      body.updatedUser[2],
      body.updatedUser[3],
      body.updatedUser[4],
    );
    return res.status(200).json(patchedUser);
  } else {
    return res.status(405);
  }
}
