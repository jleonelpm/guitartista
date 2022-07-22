//import Image from "next/image"
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { formatearFecha } from "../helpers"
import styles from "../styles/Entrada.module.css"

const Entrada = ({ entrada }) => {
     const articulo = {
        titulo: entrada.attributes.titulo,
        resumen: entrada.attributes.resumen,
        imagen: entrada.attributes.imagen.data.attributes.url,
        publicado:entrada.attributes.publishedAt,
        id:entrada.id
    } 
  
    
    //console.log(articulo)
    
    return (
        <article>
            <div className={styles.contenido}>

{/*       <Image 
        src={`http://localhost:1337${articulo.imagen}`}
        src="https://as1.ftcdn.net/v2/jpg/03/28/52/10/1000_F_328521046_CpfD7CJSpLGIyUNcsWnG42Ue6R53OpBR.jpg"
        
        alt={articulo.titulo}
        width={600}
        height={400}
    />
 */}
 
 <img src={`http://localhost:1337${articulo.imagen}`} alt={articulo.titulo} width={400} height={300} className={styles.responsive} />
                <h3>{articulo.titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(articulo.publicado)}</p>
                <p className={styles.resumen}>{articulo.resumen}</p>
                <Link href={`/blog/${articulo.id}`}>
                    <a className={styles.enlace}>Leer Entrada</a>                
                </Link>
            </div>
            
        </article>
    )
}

export default Entrada