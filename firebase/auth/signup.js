import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth(firebase_app);
import validator from 'validator';
import { validateEmail, validatePassword } from '../../lib/validateFormInput';

/*export const validateEmail = (email) => {
	let isValid = true;
	let errorMessage = '';
	if (!validator.isEmail(email)) {
		isValid = false;
		errorMessage = 'Ce champ est obligatoire ,veuillez entrer un email valide';
		console.log('Ce champ est obligatoire ,veuillez entrer un email valide');
	}
	return { isValid, errorMessage };
};

export const validatePassword = (password) => {
	let isValid = true;
	let errorMessage =
		'Ce champ est obligatoire, votre password doit contenir au moins 8 caracteres';
	if (password.length < 8) {
		isValid = false;
		errorMessage =
			'Ce champ est obligatoire, votre password doit contenir au moins 8 caracteres';
		console.log(
			'Ce champ est obligatoire, votre password doit contenir au moins 8 caracteres'
		);
	}
	return { isValid, errorMessage };
};
*/
export default async function signUp(email, password) {
	let userCredentials = null;
	let error = null;
	try {
		if (validateEmail(email).isValid && validatePassword(password).isValid) {
			userCredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
		}
	} catch (e) {
		if (e.code == 'auth/email-already-in-use') {
			e.message =
				'Cet email existe deja. Veuillez essayer avec un autre email.';
		}
		error = e;
	}

	return { userCredentials, error };
}
