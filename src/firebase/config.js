import firebase from 'firebase/app';
import 'firebase/firestore';

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
