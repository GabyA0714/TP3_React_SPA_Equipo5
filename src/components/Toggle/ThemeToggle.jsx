import React from 'react';
import { useTheme } from '../../contexts/ThemeContext'; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{ 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? 'var(--brand-main)' : 'var(--panel)',
        color: theme === 'light' ? 'var(--bg)' : 'var(--brand-light)',
        border: '1px solid var(--brand-main)'
      }}
    >
      {/* Muestra un icono o texto basado en el tema actual */}
      {theme === 'light' ? '🌚 Modo Oscuro' : '☀️ Modo Claro'}
    </button>
  );
}