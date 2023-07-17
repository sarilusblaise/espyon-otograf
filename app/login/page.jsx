'use client';
import React from 'react';
import signUp from '../../firebase/auth/signup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleForm() {}

	return (
		<article className='p-2  flex justify-center items-center min-h-screen '>
			<div className='text-gray-300 flex flex-col justify-center items-center gap-8 w-full  sm:max-w-2xl py-8 bg-slate-900'>
				<h2 className=''>
					Connecter a <span>espyon</span> otograf
				</h2>
				<div className='flex flex-col justify-center items-center gap-4 w-full'>
					<p className='w-10/12 bg-transparent sm:w-7/12 text-light, text-'>
						Vous avez deja un compte? <Link href=''>Connexion</Link>
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
							className='flex flex-col gap-2 w-10/12 bg-transparent sm:w-7/12 '
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
							<p>Mot de passe oublie?</p>
						</label>

						<button
							type='submit'
							className='w-10/12 bg-emerald-900 rounded sm:w-7/12 py-2 text-white'
						>
							S'inscrire
						</button>
					</form>
					<p>or with google</p>
					<button>continue with google</button>
				</div>
			</div>
		</article>
	);
}
