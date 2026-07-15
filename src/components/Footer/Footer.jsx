import React from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.name}>EMILIO GUTIERREZ</div>
          <div className={styles.links}>
            <a href="#about" className={styles.link}>About</a>
            <a href="#experiences" className={styles.link}>Experiences</a>
            <a href="#project" className={styles.link}>CAS Project</a>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Emilio Gutierrez. IB CAS Portfolio.
          </div>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <ArrowUp size={20} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
