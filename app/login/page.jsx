'use client';
import React from 'react';
import signUp from '../../firebase/auth/signup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Google from '../icons/Google';
import EyeOpen from '../icons/EyeOpen';
import EyeClose from '../icons/EyeCLose';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleForm() {}

	return (
		<article className='p-2  flex justify-center items-center min-h-screen '>
			<div className='text-gray-300 flex flex-col justify-center items-center gap-8 w-full  sm:max-w-xl py-8 bg-slate-900'>
				<h2 className='text-3xl w-10/12 sm:w-7/12 font-light'>
					Se connecter a <span className='text-blue-600'>espyon</span> otograf
				</h2>
				<div className='flex flex-col justify-center items-center gap-4 w-full'>
					<p className='w-10/12  sm:w-7/12 font-bold'>
						Vous n'avez pas de compte?{' '}
						<Link href='/signup' className='text-blue-500 font-normal'>
							Inscrire ici
						</Link>
					</p>
					<form
						onSubmit={handleForm}
						className='flex flex-col justify-center items-center w-full gap-8'
					>
						<label
							htmlFor=''
							className='flex flex-col gap-2 w-10/12 bg-transparent sm:w-7/12'
						>
							<p className=''>email</p>
							<input
								className='bg-transparent px-4 py-2 w-full rounded border border-gray-700 hover:border-gray-400'
								type='email'
								required
								id='email'
								name='email'
								value={email}
								placeholder='example@gmail.com'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>

						<label
							htmlFor=''
							className='flex flex-col gap-2 w-10/12 bg-transparent sm:w-7/12 relative'
						>
							<p>password</p>
							<input
								className='px-4 py-2 w-full bg-transparent rounded border border-gray-700'
								type='password'
								required
								id='password'
								name='password'
								value={password}
								placeholder='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<EyeOpen
								className='absolute right-3 top-12 hover:fill-gray-800'
								title='afficher le mot de passe '
							/>
							<p className=''>Forgot password?</p>
						</label>

						<button
							type='submit'
							className='w-10/12 bg-emerald-900 rounded sm:w-7/12 py-2 text-white'
						>
							S'inscrire
						</button>
					</form>
					<p className=''>or</p>
					<button className='flex justify-center gap-2 px-4 py-2 w-10/12 bg-transparent rounded border border-gray-700 sm:w-7/12'>
						<Google /> continuer avec google
					</button>
				</div>
			</div>
		</article>
	);
}
