import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  const METHOD = req.method;
  console.log('HEADERS: ', req.headers);
  console.log('SOCKET: ', req.socket.remoteAddress);
  console.log(METHOD, typeof req.method);
  const data = JSON.parse(req.body);
  const { firstName, lastName, email, imageId } = data;

  if (req.method === 'POST') {
    try {
      console.log('hit try');
      const newSubmission = await prisma.user.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          image_path: imageId,
        },
      });

      console.log('newSubmission: ', newSubmission);

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false, error: err });
    }
  }
}
