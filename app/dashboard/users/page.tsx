import styles from '../../page.module.css'
import Link from 'next/link'
export default function Users() {
    return (
        <main className={styles.main}>
            <h1>Users</h1>
            <Link href={"/dashboard/products"}>Produtos</Link>
            <Link href={"/person/Eros"}>navegar para Eros</Link>

        </main>
    )
}