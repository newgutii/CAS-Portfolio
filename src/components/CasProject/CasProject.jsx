import React from 'react';
import styles from './CasProject.module.css';
import nutrePamplonaImg from '../../assets/nutrepamplona.png';

const CasProject = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="project">
      <div className="container">
        <h2 className="section-title">The CAS <span>Project</span></h2>
        
        <div className={styles.layout}>
          <div className={`${styles.heroImageWrapper} fade-in`}>
            <img src={nutrePamplonaImg} alt="NutrePamplona Project" className={styles.heroImage} />
          </div>
          
          <div className={styles.contentGrid}>
            <div className={`${styles.mainText} fade-in delay-100`}>
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>NutrePamplona</h3>
              <p>
                NutrePamplona was my defining CAS project—a long-term initiative aimed at improving infrastructure and providing nutritional education for communal kitchens in underserved neighborhoods. 
              </p>
              <p>
                Recognizing the crucial role these kitchens play in the community, our team collaborated with local leaders to assess their needs. We didn't just want to provide short-term aid; we aimed to create a sustainable impact. This involved organizing fundraisers to purchase better cooking equipment and partnering with local nutritionists to host workshops on creating balanced meals with accessible ingredients.
              </p>
              <p>
                The project required extensive planning, resilience when facing logistical challenges, and a deep commitment to the community. Seeing the kitchens operate more efficiently and hearing the positive feedback from the families they serve was the most fulfilling aspect of my IB journey.
              </p>
            </div>
            
            <div className={`${styles.sidebar} fade-in delay-200`}>
              <h4 className={styles.sidebarTitle}>Project Details</h4>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>My Role</span>
                <span className={styles.infoValue}>Project Leader</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Primary Area</span>
                <span className={styles.infoValue}>Service</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>8 Months</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Key Outcomes</span>
                <span className={styles.infoValue}>Leadership, Global Engagement, Ethics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasProject;
