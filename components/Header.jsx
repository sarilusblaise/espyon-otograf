import React from 'react';
import Link from 'next/link';
export default function Header() {
	return (
		<header className='flex flex-row xs:flex-col justify-between items-center w-full md:max-w-screen-lg mx-auto mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2'>
			<Link href='/'>
				<h1 className='sm:text-3xl text-xl font-bold ml-2 tracking-tight'>
					<span className='text-blue-600'>Espyon</span> Otograf
				</h1>
			</Link>
			<div className='flex flex-row gap-2 justify-between items-center'>
				<Link href='' className='group' aria-label='TaxPal on Twitter'>
					<svg
						aria-hidden='true'
						className='h-6 w-6 fill-gray-500 group-hover:fill-gray-300'
					>
						<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84' />
					</svg>
				</Link>
				<Link
					href='/login'
					className=' max-w-fit  space-x-2 rounded-md text-white px-5 py-2 text-sm shadow-md hover:bg-emerald-600 bg-emerald-700 font-medium transition'
				>
					connexion
				</Link>
			</div>
		</header>
	);
}
