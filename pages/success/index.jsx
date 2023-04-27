// Successfully submitted entry page
import React from 'react';
import styles from './success.module.scss';
import Link from 'next/link';

export default function index() {
  return (
    <main className={styles.container}>
      <h1>You've successfully submitted your entry!</h1>
      <Link href="/" className={styles.link}>
        Return to Home Page
      </Link>
    </main>
  );
}
