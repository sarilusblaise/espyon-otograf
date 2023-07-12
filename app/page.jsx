import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
export default function HomePage() {
	return (
		<div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
			<Header />
			<main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-10 mt-10'>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='mx-auto max-w-4xl font-display text-3xl text-center font-bold tracking-normal text-white sm:text-7xl '>
						<span className='text-blue-400'>Espyon</span>{' '}
						<span className='text-blue-600'>Ortograf</span> le{' '}
						<span>correcteur</span> approprie
					</h2>
					<p className='mx-auto mt-12 max-w-xl text-lg text-center sm:text-gray-400  text-gray-500 leading-7'>
						Augmenter votre productivite en corrigeant rapidement les fautes
						d'ortographes de vos travaux ecrits : rapports, memoires ,
						article...{' '}
					</p>
					<Link
						className='bg-emerald-700 flex-1 w-60 sm:w-80 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-emerald-600 transition'
						href=''
					>
						sign up
					</Link>
				</div>
			</main>
		</div>
	);
}
