import validator from 'validator';
export const validateEmail = (email) => {
	let isValid = true;
	let message = null;
	if (!validator.isEmail(email)) {
		isValid = false;
		message = 'Ce champ est obligatoire ,veuillez entrer un email valide';
		console.log('Ce champ est obligatoire ,veuillez entrer un email valide');
	}
	return { isValid, message };
};

export const validatePassword = (password) => {
	let isValid = true;
	let message = null;
	if (password.length < 8) {
		isValid = false;
		message =
			'Ce champ est obligatoire, votre password doit contenir au moins 8 caracteres';
	}
	return { isValid, message };
};
