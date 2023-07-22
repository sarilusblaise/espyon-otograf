import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth(firebase_app);
import validator from 'validator';

const validateEmail = (email) => {
	let isValid = true;
	if (!validator.isEmail(email)) {
		isValid = false;
		console.log('Ce champ est obligatoire ,veuillez entrer un email valide');
	}
	return isValid;
};

const validatePassword = (password) => {
	let isValid = true;
	if (password.length < 8) {
		isValid = false;
		console.log(
			'Ce champ est obligatoire, votre password doit contenir au moins 8 caracteres'
		);
	}
	return isValid;
};

export default async function signUp(email, password) {
	let userCredentials = null;
	let error = null;
	try {
		if (!validateEmail(email) || !validatePassword(password)) {
			throw new Error('there is an error');
		}
		userCredentials = createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { userCredentials, error };
}
