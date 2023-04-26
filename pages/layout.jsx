import React from 'react';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Wit Assessment</title>
        <meta name="description" content="Wit Assessment for Jack Moorman" />
      </Head>
      {children}
    </>
  );
}
