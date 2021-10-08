import { createUser } from '../../../utils/database';

export default async function handler(req, res) {
  const domainURL = 'http://localhost:3000';

  if (req.method === 'POST') {
    console.log('POSSSSSSST');
    const body = req.body;
    console.log('BODY', body);
    const createdUser = await createUser(body.newUser);
    return res.status(200).json(createdUser);
  } else {
    return res.status(405);
  }
}
