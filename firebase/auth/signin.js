import firebase_app from '../config';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
	let userCredential = null;
	let error = null;
	try {
		userCredential = await signInWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
