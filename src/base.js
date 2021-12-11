import {
    getFirestore
} from '@firebase/firestore';
import {
    initializeApp
} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD3EUySyQuoDluv7CHBNFW611zLiG5SHU0",
    authDomain: "manuscript-84ead.firebaseapp.com",
    databaseURL: "https://manuscript-84ead-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "manuscript-84ead",
    storageBucket: "manuscript-84ead.appspot.com",
    messagingSenderId: "705122605274",
    appId: "1:705122605274:web:ca0e2c757414452f6b2de3"
};

initializeApp(firebaseConfig);

export const db = getFirestore();