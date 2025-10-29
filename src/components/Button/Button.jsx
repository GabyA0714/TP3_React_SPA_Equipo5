import styles from './Button.module.css'
import { Link } from 'react-router-dom'

export default function Button({ url, text }) {
  return <Link className={styles.btn} to={url}>{text}</Link>
}
