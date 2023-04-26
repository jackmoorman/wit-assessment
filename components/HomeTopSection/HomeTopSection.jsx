import React from 'react';
import bulldogLogo from '../../public/Ellipse6.png';
import pepsiLogo from '../../public/Ellipse7.png';
import Image from 'next/image';
import styles from './HTS.module.scss';
import EnterNowButton from './EnterNow/EnterNowButton';
import Carousel from './Carousel/Carousel';

export default function HomeTopSection() {
  // creating a const of steps per the design file to map over them. Saves coding down below.
  const steps = [
    'Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. Nulla est magna, gravida at enim eget, imperdiet lobortis.',
    'Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.',
    'Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna.',
  ];

  return (
    <>
      <section className={`container ${styles.topContainer}`}>
        <div className={styles.logoSection}>
          <Image
            className={styles.bulldogLogo}
            src={bulldogLogo}
            alt="bulldog-logo"
          />
          <p className={styles.hashtag}>
            OUR NEXT CONTEST: <span>#LOREMIPSUMDOLOR</span>
          </p>
        </div>

        <h1 className={styles.fanMoments}>FAN MOMENTS</h1>
        <p className={styles.fanMomentsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra congue libero in finibus. Integer nulla eros, tempus.
        </p>

        <p className={styles.pepsiSection}>
          PRESENTED BY &nbsp; <span>PEPSI</span>
          <Image
            src={pepsiLogo}
            height={50}
            width={50}
            alt="pepsi-logo"
            style={{ marginLeft: '14px' }}
          />
        </p>

        {steps.map((step, index) => (
          <p
            key={index}
            style={{ gridArea: `textBox${index}` }}
            className={styles.textBox}
          >
            {step}
          </p>
        ))}

        <EnterNowButton />

        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
      </section>
    </>
  );
}
