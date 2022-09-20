import '../styles/theme/globals.scss';
import type { AppProps } from 'next/app';

import Heading from '../components/Heading/Heading';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return <><Heading /> <Component {...pageProps} /> <Footer /> </>;
}

export default MyApp;
