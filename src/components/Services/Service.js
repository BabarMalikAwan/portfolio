import React, { useState } from 'react';
import styles from './service.module.css'; // Use CSS Modules for scoped styling
import development from './imgs/development.png';
import maintenance from './imgs/maintenance.png';
import api from './imgs/website.png';

const Service = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className={styles.serviceContainer}>
      <section className={styles.section} id="section--2">
        <div className={styles.sectionTitle}>
          <h3 className={styles.sectionHeader}>
            <b>MY SERVICES</b>
          </h3>
        </div>

        <div className={styles.operations}>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ''}`}
              onClick={() => handleTabClick(1)}
            >
              Website Development
            </button>
            <button
              className={`${styles.tab} ${activeTab === 2 ? styles.tabActive : ''}`}
              onClick={() => handleTabClick(2)}
            >
              API Integration
            </button>
            <button
              className={`${styles.tab} ${activeTab === 3 ? styles.tabActive : ''}`}
              onClick={() => handleTabClick(3)}
            >
              Website Maintenance
            </button>
          </div>
          <div
            className={`${styles.tabContent} ${activeTab === 1 ? styles.contentActive : ''}`}
          >
            <div className={styles.icon}>
              <img src={development}alt="Website Development" className={styles.iconImage} />
            </div>
            <h5 className={styles.header}>
              Full Stack Website Development from Scratch
            </h5>
            <p>
              Creating a website from scratch, including requirements gathering, design, implementation, API integration, as well as maintenance and support. I create mobile responsive websites that resonate with mobile users.
            </p>
          </div>

          <div
            className={`${styles.tabContent} ${activeTab === 2 ? styles.contentActive : ''}`}
          >
            <div className={styles.icon}>
              <img src={api}alt="API Integration" className={styles.iconImage} />
            </div>
            <h5 className={styles.header}>
              Website API Integration Service
            </h5>
            <p>
              Enriching your website with out-of-the-box and automation of workflows, payment solutions, monitoring and analytics, security, and other tools to increase user engagement.
            </p>
          </div>
          <div
            className={`${styles.tabContent} ${activeTab === 3 ? styles.contentActive : ''}`}
          >
            <div className={styles.icon}>
              <img src={maintenance} alt="Website Maintenance" className={styles.iconImage} />
            </div>
            <h5 className={styles.header}>
              Website Maintenance and Support
            </h5>
            <p>
              Enhancing scalability and performance to accommodate growing numbers of visitors and data; improving website structure to better address user demand; increasing compliance with SEO standards; performing security audits and updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
