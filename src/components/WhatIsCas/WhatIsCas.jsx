import React from 'react';
import { Palette, Activity, HeartHandshake } from 'lucide-react';
import styles from './WhatIsCas.module.css';

const WhatIsCas = () => {
  const categories = [
    {
      title: 'Creativity',
      icon: <Palette size={32} />,
      desc: 'Exploring and extending ideas leading to an original or interpretive product or performance.',
    },
    {
      title: 'Activity',
      icon: <Activity size={32} />,
      desc: 'Physical exertion contributing to a healthy lifestyle, complementing academic work elsewhere in the DP.',
    },
    {
      title: 'Service',
      icon: <HeartHandshake size={32} />,
      desc: 'Collaborative and reciprocal engagement with the community in response to an authentic need.',
    },
  ];

  return (
    <section className={`section-padding ${styles.section}`} id="what-is-cas">
      <div className="container">
        <h2 className="section-title">What is <span>CAS</span>?</h2>
        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={`${styles.card} glass fade-in delay-${(index + 1) * 100}`}>
              <div className={styles.iconWrapper}>{cat.icon}</div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsCas;
