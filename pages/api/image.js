// API route for uploading image to the filesystem
// Here, the user will be placed in the public/uploads folder
// Also, using the 'formidable' npm package to parse the image coming from the client side.
// https://www.npmjs.com/package/formidable
import formidable from 'formidable';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// By default, Next.js has body-parser built in. It needs disabled to correctly parse the uploaded image data.
export const config = {
  api: {
    bodyParser: false,
  },
};

// helper function to set the image to the filesystem (public/uploads folder)
function imageSetter(req, imageId) {
  // configuring the formidable options by referencing the options object.
  const options = (formidable.options = {});

  // setting the formidable upload directory to the public/uploads folder
  options.uploadDir = path.join(process.cwd(), '/public/uploads');
  // creating the filename for the uploaded image.
  options.filename = (name, ext, path, form) => {
    let fileExt = '';
    // looping through the original file name from back to front, and getting the correct file extension.
    for (let i = path.originalFilename.length; i >= 0; i--) {
      if (path.originalFilename[i] === '.') {
        fileExt = path.originalFilename.slice(i);
        break;
      }
    }
    // this returns the new file name with the correct file extension.
    return imageId + fileExt;
  };

  // creating a new formidable instance with the customizes options object.
  const form = formidable(options);
  // finally, returning a promise that parses the formidable form object.
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

// /api/image route handler
export default async function handler(req, res) {
  // generating a unique id for the image to be used as its path.
  const imageId = uuidv4();

  // setting the image to the filesystem --> see the helper function above.
  const setImage = await imageSetter(req, imageId);

  if (!imageSetter) return res.status(500).json({ success: false, error: err });
  else return res.status(200).json({ success: true, imageId });
}
