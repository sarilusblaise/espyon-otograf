'use client';
import React from 'react';
import signUp from '../../firebase/auth/signup';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleForm() {}

	return (
		<form onSubmit={handleForm}>
			<label htmlFor=''>
				<input
					type='email'
					required
					id='email'
					name='email'
					value={email}
					placeholder='example@gmail.com'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<label htmlFor=''>
				<input
					type='password'
					required
					id='password'
					name='password'
					value={password}
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>

			<button type='submit'>S'inscrire</button>
		</form>
	);
}
