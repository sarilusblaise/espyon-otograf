import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
	let userCredentials = null;
	let error = null;
	try {
		userCredentials = createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { userCredentials, error };
}
