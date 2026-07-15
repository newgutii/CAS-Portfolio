import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="about">
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.imageWrapper} fade-in`}>
            <img src="/Rock.JPG" alt="Emilio Gutierrez" className={styles.image} />
            <div className={styles.imageDecoration}></div>
          </div>
          <div className={`${styles.textContent} fade-in delay-200`}>
            <span className={styles.greeting}>Hi, I'm Emilio Gutierrez.</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              My Journey <span>Through CAS</span>
            </h2>
            <div className={styles.bio}>
              <p style={{ marginBottom: '1rem' }}>
                Welcome to my CAS portfolio! Throughout the International Baccalaureate program, the Creativity, Activity, and Service (CAS) framework has pushed me to step out of my comfort zone and engage with my community in meaningful ways.
              </p>
              <p>
                From leading long-term service initiatives like NutrePamplona, to challenging myself creatively and physically, this portfolio is a collection of my growth, reflections, and the impactful experiences that have shaped my perspective over the last two years.
              </p>
            </div>
            <a href="#experiences" className="btn-primary">View Experiences</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
