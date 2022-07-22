import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

//El prop children sirve para pasar todo el contenido de cada página

const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Guitartista - {pagina}</title>
                <meta name="description" content="Tienda online de Guitarras"/>
            </Head>  
            <Header/>          
            {children}
            <Footer/>
        </div>
    )
}

export default Layout