import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: "Espyon Otograph | votre correcteur d'ortographe ",
	description: "Espyon Otograf : votre correcteur d'ortographe ",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-slate-950 text-white'>{children}</body>
		</html>
	);
}
