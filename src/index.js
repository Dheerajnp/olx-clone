import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {auth,firebase} from './firebase/config'
import { addDocument,onAuthChangeFunction } from './firebase/firebaseFunctions';
// import { FirebaseContext } from './firebase/firebaseContest';
import { FirebaseProvider } from './firebase/firebaseContest';
ReactDOM.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>

, document.getElementById('root'));
