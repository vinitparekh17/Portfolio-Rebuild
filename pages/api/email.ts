import { NextApiRequest, NextApiResponse } from 'next'
import { recieveEmail } from '../../utils/email';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if(req.method === 'POST') {
      const { name, email, msg } = req.body;
      
      recieveEmail(name, email, msg)
      .then((result) => {
        result ? res.status(200).json({ success: true }) : res.status(400).json({ error: 'Something went wrong' });
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      res.status(400).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
    
  }
}