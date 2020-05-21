const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.email = functions.https.onRequest((res, resp) => {
  cors(res, resp, () => {
    resp.status(200).send({ text: 'email works' });
  });
});

exports.helloWorld = functions.https.onRequest((res, resp) => {
  cors(res, resp, () => {
    resp.status(200).send({ text: 'works' });
  });
});
