import Head from 'next/head';
import '../styles/all.scss';
import { app } from '../Base/App'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        window.app = app;
    }, []);

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_BRAND} - {process.env.NEXT_PUBLIC_SLOGAN}</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp

/*

quran => 2 hours
coding => 4 hours
migration => 1 hour
science => 2 hours


last sections
transfer => sultanimmubin => path => quran and science
professor dave => calculus => 3 done

*/