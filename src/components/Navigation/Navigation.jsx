import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation({ onLinkClick }) {
  return (
      <nav>
        <ul className={styles.list}>
          <li><NavLink to="/" onClick={onLinkClick}>Portada</NavLink></li>
          <li><NavLink to="/bitacora" onClick={onLinkClick}>Bitácora</NavLink></li>
          <li><NavLink to="/integrantes" onClick={onLinkClick}>Integrantes</NavLink></li>
          <li><NavLink to="/datos-locales" onClick={onLinkClick}>Datos JSON</NavLink></li>
          <li><NavLink to="/datos-api" onClick={onLinkClick}>Datos API</NavLink></li>
          <li><NavLink to="/diagramas" onClick={onLinkClick}>Diagramas</NavLink></li>
        </ul>
      </nav>
  )
}
