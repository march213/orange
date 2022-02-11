import React from 'react';
import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles.css';
import { DesignSystemProvider } from '../components/DesignSystemProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <DesignSystemProvider>
      <div>
        <Head>
          <title>Design System</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Component {...pageProps} />
      </div>
    </DesignSystemProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
