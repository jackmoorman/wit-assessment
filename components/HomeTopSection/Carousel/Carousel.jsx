import React from 'react';
import styles from './Carousel.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
// NOTE: Carousel data is located in /lib/carouselData.js
import { prizes } from '../../../lib/carouselData';

export default function Carousel() {
  // creating piece of state to keep track of active carousel prize.
  const [currentPrize, setCurrentPrize] = useState(0);
  // use useRef to keep track of the interval outside the useEffect hook's scope.
  const intervalRef = useRef(null);

  useEffect(() => {
    // on page load/component mount, set the intervalRef's current value to be a new interval that updates the state every 5000ms (5s)
    intervalRef.current = setInterval(() => {
      setCurrentPrize((prev) => {
        if (prev === prizes.length - 1) return 0;
        else return prev + 1;
      });
    }, 5000);

    // cleanup: clear the interval when the component is unmounted (when the page is left).
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // view the desired prize when the indicator is clicked, it sets the current prize and clears the interval to stop the carousel.
  function viewPrize(id) {
    const prizeIndex = Number(id);
    clearInterval(intervalRef.current);
    setCurrentPrize(prizeIndex);
  }

  return (
    <div className={styles.carousel}>
      <Image
        src={prizes[currentPrize].image}
        alt="prize"
        className={styles.img}
      />
      <div className={styles.imgText}>
        <p>{prizes[currentPrize].place}</p>
        <p>{prizes[currentPrize].description}</p>
      </div>
      <div className={styles.trackBar}>
        {/* Here the prizes are mapped over, and if the button is "active", it returns a red indicator, and if it is not active, it returns a non-colored button */}
        {prizes.map((prize, index) => {
          if (index === currentPrize) {
            return (
              <button
                id={index}
                onClick={(e) => viewPrize(e.target.id)}
                className={styles.btnActive}
              ></button>
            );
          } else
            return (
              <button
                id={index}
                onClick={(e) => viewPrize(e.target.id)}
              ></button>
            );
        })}
      </div>
    </div>
  );
}
