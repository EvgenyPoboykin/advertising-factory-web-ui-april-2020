import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_DOMAIN,
    databaseURL: process.env.REACT_APP_API_DATABASE,
    projectId: process.env.REACT_APP_API_P_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE,
    messagingSenderId: process.env.REACT_APP_API_MESSEGING,
    appId: process.env.REACT_APP_API_APP_ID,
    measurementId: process.env.REACT_APP_API_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const store = firebase.storage();

export const auth = firebase.auth();
export const FirebaseContext = React.createContext(null);
export const FirebaseProvider = ({ value, children }) => {
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};
