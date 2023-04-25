import React from 'react';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';

export default function Header() {

  // Per the prompt, the counter will countdown to April 30 at noon. This is 4/30/2023 at 12:00pm EST
  // The "- 04:00 designates the EST timezone for ISO 8601 format."
  const targetDate = '2023-04-30T12:00:00.000-04:00';

  // state to hold the time remaining until the target date
  // updated every 1 second by the useEffect hook calling setInterval
  const [countDown, setCountDown] = useState(calculateCountDown());

  useEffect(() => {
    // runs on initial component mount and every time the targetDate changes
    // every 1000ms (1s) this setInterval is ran and the countDown state is updated
    const timer = setInterval(() => {
      setCountDown(calculateCountDown());
    }, 1000);

    // cleanup: clear the timer when the component is unmounted (when the page is left).
    return () => {
      clearInterval(timer);
    };

  }, [targetDate])

  // calculates the time remaining until the target date and returns and object with updated values.
  function calculateCountDown () {
    // timeLeft is the difference between the target date and the current date in milliseconds
    const timeLeft = Date.parse(targetDate) - Date.now();
    // convert the timeLeft to seconds, minutes, hours, and days
    const seconds = formatTime(Math.floor((timeLeft / 1000) % 60));
    const minutes = formatTime(Math.floor((timeLeft / 1000 / 60) % 60));
    const hours = formatTime(Math.floor((timeLeft / 1000 / 60 / 60) % 24));
    const days = formatTime(Math.floor((timeLeft / 1000 / 60 / 60 / 24)));

    // return ab object with the days, hours, minutes, seconds, and total timeLeft
    return {
      days,
      hours,
      minutes,
      seconds,
      total: timeLeft
    }
  };

  // add zero-digits to the time values to always have two digits. This is for consistency in the display.
  function formatTime (time) {
    return time.toString().padStart(2, '0');
  }

  return (
    <header className={styles.header}>
      <p>VOTING BEGINS IN {' '}
        <span className={styles.date}>
          {countDown.days}D {' '}
          {countDown.hours}:
          {countDown.minutes}:
          {countDown.seconds}
        </span>
      </p>
    </header>
  )
}
