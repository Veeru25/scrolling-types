"use client"
import styles from './page.module.css';

const Scroll2 = () => {
 

  return (
    <>
     <div className={styles.flexContainer}>
      <div className={`${styles.sidebar} ${styles.sticky}`}>
        <div className={styles.sidebarLinks}>
          <a href="#section-1">Section 1</a>
          <a href="#section-2">Section 2</a>
          <a href="#section-3">Section 3</a>
          <a href="#section-4">Section 4</a>
          <a href="#section-5">Section 5</a>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div id="section-1" className={styles.section}>
          Section 1
        </div>
        <div id="section-2" className={styles.section}>
          Section 2
        </div>
        <div id="section-3" className={styles.section}>
          Section 3
        </div>
        <div id="section-4" className={styles.section}>
          Section 4
        </div>
        <div id="section-5" className={styles.section}>
          Section 5
        </div>
      </div>
      <div className={`${styles.rightSidebar} ${styles.sticky}`}>RIGHT</div>
    </div>
  <footer className={styles.footerCon}>
    footer</footer>
    </>
  );
};

export default Scroll2;
