const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = 'AQDO18OGM9';
const ALGOLIA_ADMIN_KEY = '6d84a354d7ec4fb79716a12b29f8c618';
const ALGOLIA_INDEX_NAME = 'wineries';

admin.initializeApp(functions.config().firebase);

exports.firestoreToAlgolia = functions.https.onRequest((req, res) => {
	const arr = [];
	admin
		.firestore()
		.collection('wineries')
		.get()
		.then(docs => {
			docs.forEach(doc => {
				const verb = doc.data();
				verb.objectID = doc.id;
				arr.push(verb);
			});

			const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
			const index = client.initIndex(ALGOLIA_INDEX_NAME);

			index.saveObjects(arr, (err, content) => {
				if (err) res.status(500);

				res.status(200).send(content);
			});
		});
});
