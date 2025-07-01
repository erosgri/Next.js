import styles from '../../page.module.css'

export default function Cars({params} : {params : { id: string}} ) {
    return(
        <main className={styles.main}>
            <h1>Car {params.id}</h1>
        </main>
    )
}