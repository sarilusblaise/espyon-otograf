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
					<p className='mx-auto mt-12 max-w-xl text-lg text-center sm:text-gray-400  text-gray-500 leading-7'>
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
				<div className='mt-32 md:mt-64 flex'>
					<section>
						<h3 className='mx-auto max-w-4xl font-display text-3xl text-center font-bold tracking-normal text-white sm:text-5xl '>
							Toutes les fautes sont identifies juste avant la correction finale
						</h3>
						<div>
							<p>
								Au lait des mots de la <span>memoire</span> qui tangue à faire
								la france en terre créole entre vide et plénitude le jeu cruel
								du songe saturé d’illusions à côté du mensonge toujours fidèle à
								l’écriture je dis mon île ma ville mon quartier et ma voix en
								métissage de soleil et de lune mes amours fabuleuses en
								grossesse de symboles le dérisoire pouvoir des{' '}
								<span>signe</span> face au massif du quotidien qui bouge et
								change malgré <span>l’imobile</span> éternité du rien
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
