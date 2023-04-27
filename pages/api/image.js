import formidable from 'formidable';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

function imageSetter(req, imageId) {
  const options = (formidable.options = {});

  options.uploadDir = path.join(process.cwd(), '/public/uploads');
  options.filename = (name, ext, path, form) => {
    let fileExt = '';
    for (let i = path.originalFilename.length; i >= 0; i--) {
      if (path.originalFilename[i] === '.') {
        fileExt = path.originalFilename.slice(i);
        break;
      }
    }
    return imageId + fileExt;
  };

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  const imageId = uuidv4();

  const setImage = await imageSetter(req, imageId);

  if (!imageSetter) return res.status(500).json({ success: false, error: err });
  else return res.status(200).json({ success: true, imageId });
}
