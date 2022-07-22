import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from "../styles/NoEncontrado.module.css"

const NoEncontrado = () => {
    return (
        <Layout>
            <div className={styles.noencontrado}>
                <h1 className='heading'>Página No Encontrada</h1>
                <Link href="/">
                    Regresar al Inicio
                </Link>
            </div>
        </Layout>
    )
}

export default NoEncontrado