import React from 'react';
import styles from './Videos.module.scss';
import { videos } from '../../lib/videoData';
import Image from 'next/image';

export default function Videos() {
  return (
    <section className={styles.outerContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <h3 className={styles.headlineText}>
          HEADLINE ABOUT VIDEOS <span>ALREADY SUBMITTED</span>
        </h3>
        <div className={styles.videoContainer}>
          {videos.map((video, index) => (
            <Image
              src={video.src}
              width={168}
              style={{ gridArea: `video${index}` }}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
