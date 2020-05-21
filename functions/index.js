const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ericora.site@gmail.com',
    pass: 'Gg46131906',
  },
});
exports.email = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const sender = req.query.email;
    const message = req.query.message;
    const dest = 'ericz910508@gmail.com';
    const mailOptions = {
      from: 'ericora.com <ericora.site@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: `Ericora.com ${sender}`, // email subject
      html: `<p style="font-size: 16px;">Hi Eric:</p>
               <br />
               <p style="font-size: 16px;">${message}</p>
           `, // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('send');
    });
  });
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.status(200).send({ text: 'works' });
  });
});
