'use client';
import React from 'react';
import signUp from '../../firebase/auth/signup';
import googleSignIn from '../../firebase/auth/googleSignin';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Google from '../icons/Google';
import EyeClose from '../icons/EyeClose';
import EyeOpen from '../icons/EyeOpen';
import { validateEmail, validatePassword } from '../../lib/validateFormInput';
import FormValidationError from '../../components/FormValidationError';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [showErrorOnBlur, setShowErrorOnBlur] = useState({
		showEmailError: false,
		showPasswordError: false,
	});
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const isEmailValid = validateEmail(email);
	const isPasswordValid = validatePassword(password);
	const canSubmit =
		validateEmail(email).isValid && validatePassword(password).isValid;

	const handleForm = async (e) => {
		e.preventDefault();
		console.log('test signup page');
		const { userCredentials, error: resError } = await signUp(email, password);
		if (resError) {
			console.log(resError.message);
			return setError(resError.message);
		}

		console.log(userCredentials.user);
		return router.push('/spellCheck');
	};

	const handleGoogleSignInOnClick = async (event) => {
		event.preventDefault();
		console.log('test signup page');
		const { userCredentials, error: resError } = await googleSignIn();
		if (resError) {
			return console.log(resError.message);
		}

		console.log(userCredentials.user);
		return router.push('/spellCheck');
	};

	const handleEmailBlur = (e) => {
		if (!isEmailValid.isValid) {
			setShowErrorOnBlur({ ...showErrorOnBlur, showEmailError: true });
		} else {
			setShowErrorOnBlur({ ...showErrorOnBlur, showEmailError: false });
		}
	};
	const handlePasswordBlur = (e) => {
		if (!isPasswordValid.isValid) {
			setShowErrorOnBlur({ ...showErrorOnBlur, showPasswordError: true });
		} else {
			setShowErrorOnBlur({ ...showErrorOnBlur, showPasswordError: false });
		}
	};
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	return (
		<article className='p-2  flex justify-center items-center min-h-screen '>
			<div className='text-gray-300 flex flex-col justify-center items-center gap-8 w-full  sm:max-w-xl py-8 bg-slate-900 shadow-4xl'>
				<h2 className='text-3xl w-10/12 sm:w-7/12 font-light'>
					S'inscrire a <span className='text-blue-600'>espyon</span> otograf
				</h2>
				<div className='flex flex-col justify-center items-center gap-4 w-full'>
					<p className='w-10/12  sm:w-7/12 font-bold'>
						Vous avez deja un compte?{' '}
						<Link href='/login' className='text-blue-500 font-normal'>
							Connexion
						</Link>
					</p>
					<form
						noValidate
						autoComplete='off'
						onSubmit={handleForm}
						className='flex flex-col justify-center items-center w-full gap-8'
					>
						<label
							htmlFor='email'
							className='flex flex-col gap-2 w-10/12 bg-transparent sm:w-7/12'
						>
							<p className=''>email</p>
							<input
								className='bg-transparent px-4 py-2 w-full rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:outline-none '
								type='email'
								required
								id='email'
								name='email'
								value={email}
								placeholder='example@gmail.com'
								onChange={(e) => {
									setEmail(e.target.value);
									setError('');
								}}
								onBlur={handleEmailBlur}
							/>
							{showErrorOnBlur.showEmailError && (
								<FormValidationError isInputValid={isEmailValid} />
							)}

							{error && <span className='text-red-400'>{error}</span>}
						</label>

						<label
							htmlFor='password'
							className='flex flex-col gap-2 w-10/12 bg-transparent sm:w-7/12 relative'
						>
							<p>password</p>
							<input
								className='px-4 py-2 w-full bg-transparent rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:outline-none '
								type={showPassword ? 'text' : 'password'}
								required
								minLength={8}
								id='password'
								name='password'
								value={password}
								placeholder='password'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								onBlur={handlePasswordBlur}
							/>
							<button
								type='button'
								className='absolute right-3 top-12'
								onClick={togglePasswordVisibility}
							>
								{showPassword ? (
									<EyeClose
										className=' hover:fill-gray-800 transition'
										title='masquer le mot de passe '
									/>
								) : (
									<EyeOpen
										className=' hover:fill-gray-800 transition'
										title='afficher le mot de passe '
									/>
								)}
							</button>

							{showErrorOnBlur.showPasswordError && (
								<FormValidationError isInputValid={isPasswordValid} />
							)}
						</label>

						<button
							type='submit'
							disabled={!canSubmit}
							className='w-10/12 bg-emerald-900 rounded sm:w-7/12 py-2 text-white disabled:opacity-40 disabled:text-gray-400'
						>
							S'inscrire
						</button>
					</form>
					<p className=''>or</p>
					<button
						type='button'
						className='flex justify-center gap-2 px-4 py-2 w-10/12 bg-transparent rounded border border-gray-700 sm:w-7/12'
						onClick={handleGoogleSignInOnClick}
					>
						<Google /> S'inscrire avec google
					</button>
				</div>
			</div>
		</article>
	);
}
