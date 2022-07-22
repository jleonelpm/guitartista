import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
                  <Link href="/">Inicio</Link>
                  <Link href="/nosotros">Nosotros</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/tienda">Tienda</Link>
        </nav>

        <p className={styles.copyright}>
        <FontAwesomeIcon icon={faCopyright}/>        
        <span> Todos los Derechos Reservados</span>
        </p>
      </div> 
    </footer>
  )
}

export default Footer