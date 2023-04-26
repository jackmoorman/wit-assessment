import styles from './home.module.scss';
import Header from '../components/header/Header';
import HomeTopSection from '../components/HomeTopSection/HomeTopSection';
import Videos from '../components/Videos/Videos';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="app">
        <section className={styles.homeTopSection}>
          <Header />
          <HomeTopSection />
        </section>
        <Videos />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
