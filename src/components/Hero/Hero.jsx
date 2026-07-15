import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <img src={heroBg} alt="Abstract Background" className={styles.heroBackground} />
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={`${styles.title} fade-in`}>Emilio Gutierrez</h1>
        <p className={`${styles.subtitle} fade-in delay-100`}>
          My IB CAS Portfolio: Creativity, Activity, Service
        </p>
        <div className="fade-in delay-200">
          <a href="#about" className="btn-primary">
            Explore My Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
