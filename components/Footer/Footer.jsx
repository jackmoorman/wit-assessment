import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import witLogo from '../../public/Logo_Wit.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.outerContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <Image src={witLogo} className={styles.image} />
        <p className={styles.rights}>
          Copyright &copy; 2020 Wit. All rights reserved.
        </p>
        <div className={styles.links}>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
          <span>|</span>
          <Link href="/privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="terms" className={styles.link}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
