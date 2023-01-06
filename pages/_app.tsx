import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import '../styles/globals.css';
import Aos from 'aos';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
