import React from 'react';
import Head from 'next/head';
import styles from './submission.module.scss';

export default function SubmissionLayout({ children }) {
  return (
    <>
      <Head>
        <title>Wit | Submission</title>
        <meta name="description" content="Wit Content Form Submission" />
      </Head>
      <main className={styles.submissionLayout}>{children}</main>
    </>
  );
}
