import React from 'react';
import styles from './Carousel.module.scss';
import Image from 'next/image';
import fsJersey from '../../../public/Rectangle7.png';

export default function Carousel() {
  return (
    <div className={styles.imgContainer}>
      <Image src={fsJersey} width={404} height={300} />
      <div>
        <h3>1ST PLACE</h3>
      </div>
    </div>
  );
}
