import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import styles from './Experiences.module.css';

const mixingConcreteImg = '/Concrete.JPG';

const experiencesData = [
  {
    id: 1,
    title: 'Mixing Concrete for Construction Volunteer Work',
    type: 'Service & Activity',
    outcomes: '1, 3, 4',
    image: mixingConcreteImg,
    description: `During this service experience, I volunteered to help build a communal structure in a local underserved area. The physical demand of mixing concrete taught me about endurance, while the collaborative nature of the project highlighted the importance of teamwork and communication.
    
    Reflecting on this, I realized how much effort goes into physical labor and gained a profound respect for construction workers. It also opened my eyes to the immediate, tangible impact that service can have on a community.`,
  },
  {
    id: 2,
    title: 'Training and Doing the Inka Trail',
    type: 'Activity',
    outcomes: '1, 2, 4',
    image: 'https://images.unsplash.com/photo-1517627043994-b991ae8f6b00?q=80&w=800&auto=format&fit=crop', // Temporary placeholder until photo is provided
    description: `I embarked on the physical and mental challenge of completing the Inka Trail. This required months of rigorous training, stamina building, and preparation for high altitudes. 
    
    The trek itself pushed me to my absolute limits but reaching Machu Picchu made every grueling step worth it. This experience taught me resilience and the importance of thorough preparation when facing monumental physical challenges.`,
  },
  {
    id: 3,
    title: 'Training for a Half-Marathon',
    type: 'Activity',
    outcomes: '1, 2, 4',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop',
    description: `To challenge myself physically, I committed to training for and completing a half-marathon over a span of 4 months. I had to create a strict schedule, manage my nutrition, and stay motivated through injuries and fatigue.
    
    The experience was an ultimate test of perseverance. Crossing the finish line taught me that setting ambitious goals and dedicating consistent effort yields results that previously seemed impossible.`,
  }
];

const Experiences = () => {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section className={`section-padding ${styles.section}`} id="experiences">
      <div className="container">
        <h2 className="section-title">My <span>Experiences</span></h2>
        
        <div className={styles.grid}>
          {experiencesData.map((exp, idx) => (
            <div 
              key={exp.id} 
              className={`${styles.card} fade-in delay-${(idx + 1) * 100}`}
              onClick={() => setActiveExp(exp)}
            >
              <img src={exp.image} alt={exp.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <div>
                  <span className={styles.tag}>{exp.type}</span>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                  <p className={styles.outcomes}>Learning Outcomes: {exp.outcomes}</p>
                </div>
                <button className={styles.readMore}>
                  Read Reflection <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeExp && (
        <div className={styles.modalOverlay} onClick={() => setActiveExp(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setActiveExp(null)}>
              <X size={24} />
            </button>
            <img src={activeExp.image} alt={activeExp.title} className={styles.modalImage} />
            <div className={styles.modalBody}>
              <span className={`${styles.tag} ${styles.modalTag}`}>{activeExp.type}</span>
              <h3 className={styles.modalTitle}>{activeExp.title}</h3>
              <p className={styles.outcomes}>Learning Outcomes: {activeExp.outcomes}</p>
              <div className={styles.modalText}>
                {activeExp.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;
