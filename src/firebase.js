import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";
import { signOut } from "firebase/auth";

// import { firebaseAuth } from 'firebase/auth';


const fireBaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
}


export const app = firebase.initializeApp(fireBaseConfig);

export const analytics = getAnalytics(app);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export default firebase;