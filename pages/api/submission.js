import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const METHOD = req.method;
  const ip = req.headers['x-forwarded-for'];
  const { firstName, lastName, email, imageId } = req.body;

  if (req.method === 'POST') {
    try {
      console.log('hit try');
      const newSubmission = await prisma.user.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          image_path: imageId,
          user_ip: ip,
        },
      });

      if (!newSubmission)
        return res.status(500).json({ success: false, error: err });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false, error: err });
    }
  }
}
