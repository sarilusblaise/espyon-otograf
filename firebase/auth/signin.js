import firebase_app from '../config';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { validateEmail } from '../../lib/validateFormInput';
const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
	let userCredential = null;
	let error = null;
	try {
		if (validateEmail(email).isValid) {
			userCredential = await signInWithEmailAndPassword(auth, email, password);
		} else {
			throw new Error('email non valide');
		}
	} catch (e) {
		error = e;
	}

	return { userCredential, error };
}
