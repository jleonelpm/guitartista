import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faShop, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Header.module.css"



const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href='/'>
              <a>
                <Image width={100} height={100} src='/img/logo.png' />
              </a>
            </Link>
          </div>
            <ul className={styles.navegacion}>
              <li><FontAwesomeIcon icon={faHome} />
                <Link href="/">Inicio</Link></li>
              <li><FontAwesomeIcon icon={faPeopleGroup}/>
                <Link href="/nosotros">Nosotros</Link></li>
              <li><FontAwesomeIcon icon={faBlog}/>
                <Link href="/blog">Blog</Link></li>
              <li><FontAwesomeIcon icon={faShop}/>
                <Link href="/tienda">Tienda</Link></li>
            </ul>

        </div>
      </div>

    </header>
  )
}

export default Header