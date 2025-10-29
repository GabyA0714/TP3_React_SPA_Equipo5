import { useState } from "react";
import styles from "./Sidebar.module.css";
import LogoEquipo17 from "../Logo/LogoEquipo17";
import Navigation from "../Navigation/Navigation";

export default function Sidebar({isMenuOpen, toggleMenu}) {
  return (
    <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.logoContainer}>
        <LogoEquipo17 />
      </div>
      <Navigation onLinkClick={toggleMenu} />
    </aside>
  );
}
