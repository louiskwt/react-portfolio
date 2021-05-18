import firebase from 'firebase/app';
import 'firebase/firestore';

// let apiKey;
// let authDomain;
// let projectId;
// let storageBucket;
// let messagingSenderId;
// let appId;

// if (process.env.NODE_ENV !== 'production') {
// 	apiKey = process.env.REACT_APP_FIREBASE_KEY;
// 	authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
// 	projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
// 	storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
// 	messagingSenderId = process.env.REACT_APP_FIREBASE_SENDER_ID;
// 	appId = process.env.REACT_APP_FIREBASE_APP_ID;
// } else {
// 	apiKey = process.env.FIREBASE_KEY;
// 	authDomain = process.env.FIREBASE_AUTH_DOMAIN;
// 	projectId = process.env.FIREBASE_PROJECT_ID;
// 	storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
// 	messagingSenderId = process.env.FIREBASE_SENDER_ID;
// 	appId = process.env.FIREBASE_APP_ID;
// }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBoVyAMfVCrTtktaoAq-Qvdhau1aNVYXCI',
	authDomain: 'portfolio-20478.firebaseapp.com',
	projectId: 'portfolio-20478',
	storageBucket: 'portfolio-20478.appspot.com',
	messagingSenderId: '375177405829',
	appId: '1:375177405829:web:3dc3a64d256be103b150ec',
	measurementId: 'G-S1FERF1L38'
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
