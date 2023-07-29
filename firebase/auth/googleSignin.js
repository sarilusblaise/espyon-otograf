import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebase_app from '../config';
import { useRouter } from 'next/navigation';
import { use } from 'react';

const auth = getAuth(firebase_app);

const provider = new GoogleAuthProvider();

export default async function googleSignIn() {
	let userCredentials = null;
	let error = null;
	try {
		const result = await signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		// The signed-in user info.
		userCredentials = result.user;
		console.log(user);
		// IdP data available using getAdditionalUserInfo(result)
		// ...
	} catch (e) {
		error = e.code;
		console.log(e);
	}

	return { userCredentials, error };
}
