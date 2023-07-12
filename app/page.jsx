import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
export default function HomePage() {
	return (
		<div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
			<Header />
			<main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-10'>
				<div className='flex flex-col justify-center items-center min-h-[70vh]'>
					<h2 className='mx-auto max-w-4xl font-display text-3xl text-center font-bold tracking-normal text-white sm:text-7xl '>
						<span className='text-blue-400'>Espyon</span>{' '}
						<span className='text-blue-600'>Ortograf</span> le{' '}
						<span>correcteur</span> approprie
					</h2>
					<p className='mx-auto mt-12 max-w-xl text-lg text-center  text-gray-500 leading-7'>
						Augmenter votre productivite en corrigeant rapidement les fautes
						d'ortographes de vos travaux ecrits : rapports, memoires ,
						article...{' '}
					</p>
					<Link
						className='bg-emerald-700  w-60 sm:w-80 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-emerald-600 transition'
						href=''
					>
						sign up
					</Link>
				</div>
				<div className='mt-32 md:mt-32 flex flex-col '>
					<section className='flex flex-col md:flex-row gap-16 justify-center items-center min-h-screen w-full border border-gray-400 rounded-md bg-slate-900  px-2 md:px-8 py-8'>
						<h3 className='mx-auto max-w-4xl font-display text-3xl text-center font-bold tracking-normal text-white sm:text-5xl '>
							Toutes les <span className='text-blue-400'>fautes</span> sont
							identifies juste avant la
							<span className='text-blue-400'>correction</span> finale
						</h3>
						<div className=' bg-slate-800 p-4 rounded-md border border-gray-700 text-lg max-w-[400px]'>
							<p className='text-gray-500 text-justify'>
								Au lait des mots de la{' '}
								<span className='bg-yellow-400 rounded'>memoire</span> qui
								tangue à faire la france en terre créole entre vide et plénitude
								le jeu cruel du songe saturé d’illusions à côté du mensonge
								toujours <span className='bg-yellow-400 rounded'>fidele</span> à
								l’écriture je dis mon île ma ville mon quartier et ma voix en
								métissage de soleil et de lune mes amours fabuleuses en
								grossesse de symboles le dérisoire pouvoir des{' '}
								<span className='bg-yellow-400 rounded'>signe</span> face au
								massif du quotidien qui bouge et change malgré{' '}
								<span className='bg-yellow-400 rounded'>l’imobile</span>{' '}
								éternité du rien
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
