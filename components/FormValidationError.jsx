import React from 'react';
export default function FormValidationError({ isInputValid }) {
	if (!isInputValid.isValid) {
		return <span className='text-red-400 text-sm'>{isInputValid.message}</span>;
	}
}
