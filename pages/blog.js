import Image from "next/image"
import Layout from "../components/Layout"
import Entrada from "../components/Entrada"
import styles from "../styles/Blog.module.css"

const Blog = ({entradas}) => {

  const {data} = entradas
 

  //console.log(entradas)

  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {data.map(entrada => (
            <Entrada
            key = {entrada.id}
            entrada = {entrada} 
            />
          ))
          }
        </div>
      </main>
    </Layout>
  )
}

//Esta es la forma correcta de consultar APIS en NextJS
//export async function getServerSideProps(context) {
export async function getStaticProps(context) {

  const url = `${process.env.API_URL}/api/blogs?populate=*`
  //const url = `http://localhost:1337/api/blogs?populate=*`
  //console.log(process.env.API_URL)
  //const url = "http://localhost:1337/api/blogs"
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  console.log(entradas)

  if (!entradas) {
    return {
      notFound: true,
    }
  }

  //Siempre retorna un objeto
  //Al ser un props en la misma pagina estara disponible por lo tanto en blog
  return {
    props: {
      entradas
    }
  }

}

export default Blog