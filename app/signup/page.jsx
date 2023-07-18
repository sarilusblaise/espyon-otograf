'use client';
import React from 'react';
import signUp from '../../firebase/auth/signup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleForm() {}

	return (
		<article className='p-2  flex justify-center items-center min-h-screen '>
			<div className='text-gray-300 flex flex-col justify-center items-center gap-8 w-full  sm:max-w-xl py-8 bg-slate-900'>
				<h2 className='text-3xl w-10/12 sm:w-7/12 font-light'>
					S'inscrire a <span className='text-blue-600'>espyon</span> otograf
				</h2>
				<div className='flex flex-col justify-center items-center gap-4 w-full'>
					<p className='w-10/12  sm:w-7/12 font-bold'>
						Vous n'avez pas de compte?{' '}
						<Link href='' className='text-blue-500 font-normal'>
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
						<Google /> S'inscrire avec google
					</button>
				</div>
			</div>
		</article>
	);
}

//icons

export function Google({ className }) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
				fill='#FFC107'
			/>
			<path
				d='M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z'
				fill='#FF3D00'
			/>
			<path
				d='M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3037 18.001 12 18C9.399 18 7.1905 16.3415 6.3585 14.027L3.0975 16.5395C4.7525 19.778 8.1135 22 12 22Z'
				fill='#4CAF50'
			/>
			<path
				d='M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
				fill='#1976D2'
			/>
		</svg>
	);
}

export function EyeOpen({ className, title }) {
	return (
		<svg
			width='22'
			height='16'
			viewBox='0 0 22 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<title>{title}</title>
			<path
				d='M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962Z'
				stroke='#94a3b8'
				stroke-width='1'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z'
				stroke='#94a3b8'
				stroke-width='1'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}

export function EyeClose({ className, title }) {
	return (
		<svg
			width='22'
			height='17'
			viewBox='0 0 22 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<title>{title}</title>
			<path
				d='M14.5631 8.25C14.5631 9.2814 14.1735 10.2706 13.4799 10.9999C12.7864 11.7292 11.8458 12.1389 10.865 12.1389M7.16692 8.25C7.16692 7.2186 7.55654 6.22945 8.25006 5.50014C8.94359 4.77083 9.88421 4.36111 10.865 4.36111M8.64615 14.9809C9.37374 15.1584 10.1181 15.2486 10.865 15.25C16.1754 15.25 20.48 10.5833 20.48 8.25C20.48 7.21089 19.6257 5.70822 18.2086 4.36111M13.4537 1.61556C12.6097 1.37495 11.7394 1.25204 10.865 1.25C5.55456 1.25 1.25 5.91667 1.25 8.25C1.25 9.27667 2.08355 10.7544 3.46885 12.0883M4.20846 15.25L17.5215 1.25'
				stroke='#94a3b8'
				stroke-width='1'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}
