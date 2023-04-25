import styles from './home.module.scss';
import Header from '../components/header/Header';
import HomeTopSection from '../components/HomeTopSection/HomeTopSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="app">
        <section className={styles.homeTopSection}>
          <Header />
          <HomeTopSection />
        </section>
      </div>
    </>
  );
}
