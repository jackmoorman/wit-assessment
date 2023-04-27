// api route for handling saving users to the database.
// importing the prisma client generator from a helper in /lib/prisma.js
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const METHOD = req.method;
  // grabbing client IP Address to save in the database.
  const ip = req.headers['x-forwarded-for'];
  const { firstName, lastName, email, imageId } = req.body;

  if (req.method === 'POST') {
    try {
      // this is how you create a new table row in the database using Prisma.
      const newSubmission = await prisma.user.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          image_path: imageId,
          user_ip: ip,
        },
      });

      // if the user cannot be created, respond with 500 status and the error.
      // more times than not, the error will be due to a duplicate email address.
      // if its a duplicate email, the user will be alerted accordingly.
      if (!newSubmission)
        return res.status(500).json({ success: false, error: err });

      return res.status(200).json({ success: true });
    } catch (err) {
      // this could fire for many reasons, most commonly it fires if the database is not running (LOL);
      return res.status(500).json({ success: false, error: err });
    }
  }
}
