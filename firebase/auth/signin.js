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
			throw new Error('adresse email non valide');
		}
	} catch (e) {
		if (e.code === 'auth/wrong-password') {
			e.message = '  email ou password incorrect';
		}
		if (e.code === 'auth/network-request-failed') {
			e.message =
				"une erreur inconnue s'est produite .Veuillez verifier votre connexion internet";
		}
		error = e;
	}

	return { userCredential, error };
}
