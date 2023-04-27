// CTA.jsx
import React from 'react';
import styles from './CTA.module.scss';
import EnterNowButton from '../HomeTopSection/EnterNow/EnterNowButton';

export default function CTA() {
  return (
    <section className={styles.outerContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <h3 className={styles.headingText}>LAST CTA</h3>
        <p className={styles.ctaText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tellus tellus, pulvinar quis volutpat et, mollis vitae ligula.
        </p>
        <EnterNowButton />
      </div>
    </section>
  );
}
