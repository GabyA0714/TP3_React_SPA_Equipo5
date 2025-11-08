import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import GlowingButton from '../Button/GlowingButton.jsx';

export default function Navigation({ onLinkClick, soundOn, toggleSound, theme, toggleTheme }) {
  return (
      <nav className={styles.navContainer}>
        <ul className={styles.list}>
          <li><NavLink to="/" onClick={onLinkClick}>Portada</NavLink></li>
          <li><NavLink to="/bitacora" onClick={onLinkClick}>Bitácora</NavLink></li>
          <li><NavLink to="/integrantes" onClick={onLinkClick}>Integrantes</NavLink></li>
          <li><NavLink to="/datos-locales" onClick={onLinkClick}>Datos JSON</NavLink></li>
          <li><NavLink to="/datos-api" onClick={onLinkClick}>Datos API</NavLink></li>
          <li><NavLink to="/diagramas" onClick={onLinkClick}>Diagramas</NavLink></li>
        </ul>

        {/* 🔊 Botón de Sonido */}
        <div className={styles.utilityButtons}>
          <GlowingButton
              as="button"
              variant="sound-theme" 
              onClick={toggleSound}
              title={soundOn ? 'Silenciar música' : 'Activar música'}
          >
              {soundOn ? '🔊' : '🔇'}
          </GlowingButton>

          
        {/* ☀️🌙 Botón de Tema */}
          <GlowingButton
              as="button"
              variant="sound-theme"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Cambiar a oscuro' : 'Cambiar a claro'}
          >
              {theme === 'light' ? '🌙' : '☀️'}
          </GlowingButton>
        </div>
      </nav>
  )
}
