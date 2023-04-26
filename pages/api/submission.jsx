export default function handler(req, res) {
  // res.status(200).json({ text: 'Hello' });
  // console.log(JSON.parse(req.body));
  const formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    console.log(fields);
  });
}
