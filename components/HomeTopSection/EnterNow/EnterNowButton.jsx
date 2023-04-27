// EnterNowButton.jsx
import React from 'react';
import styles from './EnterNowButton.module.scss';
import Link from 'next/link';

export default function EnterNowButton() {
  return (
    <Link href="/submission">
      <button className={styles.button}>ENTER NOW</button>
    </Link>
  );
}
