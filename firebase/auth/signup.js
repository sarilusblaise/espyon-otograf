import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
	let userCredential = null;
	let error = null;
	try {
		userCredential = createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { userCredential, error };
}
