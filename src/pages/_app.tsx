import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head              from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
