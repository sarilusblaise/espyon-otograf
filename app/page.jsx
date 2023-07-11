import React from 'react';
import Header from '../components/Header';
export default function HomePage() {
	return (
		<main>
			<div>
				<h2 className='mx-auto max-w-4xl font-display text-5xl text-center font-bold tracking-normal text-white sm:text-7xl '>
					<span className='text-blue-400'>Espyon</span>{' '}
					<span className='text-blue-600'>Ortograf</span> le{' '}
					<span>correcteur</span> approprie
				</h2>
				<p className='mx-auto mt-12 max-w-xl text-lg text-center sm:text-gray-400  text-gray-500 leading-7'>
					Augmenter votre productivite en corrigeant rapidement les fautes
					d'ortographes de vos travaux ecrits : rapports, memoires , article...{' '}
				</p>
			</div>
		</main>
	);
}
