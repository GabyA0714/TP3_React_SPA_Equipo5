import React from 'react';
import styles from './HamburguerButton.module.css';

export default function HamburgerButton({ isMenuOpen, toggleMenu }) {
  return (
    <button 
      className={styles.hamburger}
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? '✕' : '☰'}
    </button>
  );
}