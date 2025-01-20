

"use client";
import React, { useEffect, useState } from "react";
import styles from './page.module.css';

const Scroll2 = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);
    const observerOptions = {
      root: null, 
      threshold: 1.0, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e:any, id:any) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById(id);
    const offset = 100; // Adjust this offset as needed

    if (targetSection) {
      const sectionTop = targetSection.offsetTop - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className={styles.headerCon}>header</header>
      <div className={styles.flexContainer}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarLinks}>
            <a
              href="#section-1"
              className={activeSection === "section-1" ? styles.activeLink : ""}
              onClick={(e) => handleLinkClick(e, "section-1")}
            >
              Section 1
            </a>
            <a
              href="#section-2"
              className={activeSection === "section-2" ? styles.activeLink : ""}
              onClick={(e) => handleLinkClick(e, "section-2")}
            >
              Section 2
            </a>
            <a
              href="#section-3"
              className={activeSection === "section-3" ? styles.activeLink : ""}
              onClick={(e) => handleLinkClick(e, "section-3")}
            >
              Section 3
            </a>
            <a
              href="#section-4"
              className={activeSection === "section-4" ? styles.activeLink : ""}
              onClick={(e) => handleLinkClick(e, "section-4")}
            >
              Section 4
            </a>
            <a
              href="#section-5"
              className={activeSection === "section-5" ? styles.activeLink : ""}
              onClick={(e) => handleLinkClick(e, "section-5")}
            >
              Section 5
            </a>
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
        <div className={styles.rightSidebar}>Right-Container</div>
      </div>
      <footer className={styles.footerCon}>footer</footer>
    </>
  );
};

export default Scroll2;
