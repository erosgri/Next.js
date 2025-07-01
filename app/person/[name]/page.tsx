import styles from '../../page.module.css'

export default function Cars({params} : {params : { name: string}} ) {
    return(
        <main className={styles.main}>
            <h1>Meu Nome é: {params.name}</h1>
        </main>
    )
}