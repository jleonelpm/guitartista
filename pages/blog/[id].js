/* Es importtante nombrar a este archivo como [id].js
debido a que es la manera de trabajar con contenido dinamico */
import Image from "next/image"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import styles from "../../styles/Entrada.module.css"
import { formatearFecha } from "../../helpers"


/* Le pasamos a la EntradaBlog el props que estamos retornando de la funcion
 getServerSideProps */
const EntradaBlog = ({ entrada }) => {

  const { data } = entrada

  const articulo = {
    titulo: data.attributes.titulo,
    resumen: data.attributes.resumen,
    imagen: data.attributes.imagen.data.attributes.url,
    publicado: data.attributes.publishedAt,
    id: data.id
  }

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading"> {data.attributes.titulo}</h1>
        <article className={styles.entrada}>
          {/* <Image
            src={data.attributes.imagen.data.attributes.url}
            alt={articulo.titulo}
            width={600}
            height={400}
          /> */}
          <img src={`http://localhost:1337${data.attributes.imagen.data.attributes.url}`} alt={articulo.titulo} width={400} height={300} className={styles.responsive} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(data.attributes.publishedAt)}</p>
            <p className={styles.texto}>{data.attributes.contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

/* Lo que realiza esta funcion es la creacion de las paginas correspondientes a cada id 
esto se realiza cuando se sube a produccion 
Solo se usa cuando se emplea getStaticProps*/
export async function getStaticPaths() {


  //const url = "http://localhost:1337/api/blogs?populate=*"
  const url = `${process.env.API_URL}/api/blogs?populate=*`

  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  console.log(entradas)

  /* Es importante verificar la estructura del json
  para acceder a los atributos correctos */
  const paths = entradas.data.map(entrada => ({
    params: { id: entrada.id.toString() }
  }))

  return {
    paths,
    fallback: true /* muchas entradas se recomienda true, en caso contrario false*/
  }
}

/* En routing dinamico cuando se usa StaticProps es necesario getStaticPaths*/
export async function getStaticProps({ params: { id } }) {

  //const url = `http://localhost:1337/api/blogs/${id}?populate=*`
  const url = `${process.env.API_URL}/api/blogs/${id}?populate=*`

  console.log(url)
  //const url = "http://localhost:1337/api/blogs"
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()
  //console.log(entrada.data)

  return {
    props: {
      entrada
    }
  }
}

/* La pasamos el props query a la funcion que viene del mismo nombre del archivo [id].js */
/* export async function getServerSideProps({query : {id}}) {

    const url = `http://localhost:1337/api/blogs/${id}?populate=*`
    console.log(url)
    //const url = "http://localhost:1337/api/blogs"
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    //console.log(entrada.data)

    return {
      props: {
        entrada
      }
    }
} */

export default EntradaBlog