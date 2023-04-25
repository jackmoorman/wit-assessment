import React from 'react';
import bulldogLogo from '../../public/Ellipse6.png';
import pepsiLogo from '../../public/Ellipse7.png';
import Image from 'next/image';
import styles from './HTS.module.scss';
import TextBox from './TextBox/TextBox';
import EnterNow from './EnterNow/EnterNow';
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
      <div
        style={{ border: '1px solid white' }}
        className={`container ${styles.homeTopContainer}`}
      >
        <section className={`row ${styles.homeTopLeft}`}>
          <div className={styles.homeLogoSection}>
            {/* 76px x 76px per the design */}
            <Image
              src={bulldogLogo}
              width={76}
              height={76}
              alt="bulldog-logo"
            />
            <div className={styles.logoText}>
              <p>OUR NEXT CONTEST:</p>
              <p>#LOREMIPSUMDOLOR</p>
            </div>
          </div>
          <div className={styles.fanMoments}>
            <h1 className={styles.fanMomentsHero}>FAN MOMENTS</h1>
            <p>
              Lorem ipsum dolor sit amel, consectetur adipiscing elit. Nullam
              phareta congue libero in finibus. Integer null eros, tempus.
            </p>
          </div>
          <div className={styles.pepsiSection}>
            <p>
              PRESENTED BY <span>PEPSI</span>{' '}
            </p>
            <Image src={pepsiLogo} width={50} height={50} alt="pepsi-logo" />
          </div>
          <div className={styles.stepsSection}>
            {steps.map((step, index) => (
              <TextBox key={index} text={step} />
            ))}
          </div>
          <EnterNow />
        </section>
        <section className={styles.carouselSection}>
          <Carousel />
        </section>
      </div>
    </>
  );
}
