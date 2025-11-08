import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HamburgerButton from './components/HamburguerButton/HamburguerButton.jsx';
import Portada from './pages/Portada.jsx';
import Bitacora from './pages/Bitacora.jsx';
import Integrantes from './pages/Integrantes.jsx';
import Integrante from './pages/Integrante.jsx';
import DataLocal from './pages/DataLocal.jsx';
import DataAPI from './pages/DataAPI.jsx';
import Diagramas from './pages/Diagramas.jsx';
import NotFound from './pages/NotFound.jsx';
import portalSound from '/portal-sfx.mp3'; // 🎵 sonido global
import { useTheme } from './contexts/ThemeContext.jsx';
import { useSound } from './contexts/SoundContext.jsx';

export default function App() {


  const { soundOn, toggleSound } = useSound();
  const { theme, toggleTheme } = useTheme();


  // === 🎛️ Control del menú ===
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // === 🌌 Render principal ===
  return (
    <div className="app">
      <HamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        soundOn={soundOn}
        toggleSound={toggleSound}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="content">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrante/:id" element={<Integrante />} />
          <Route path="/datos-locales" element={<DataLocal />} />
          <Route path="/datos-api" element={<DataAPI />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}
