import Link from 'next/link'
import styles from '../../page.module.css'
export default function Products() {
    return (
        <main className={styles.main}>
            <h1>Products</h1>
            <Link href={"/dashboard/users"}>Usuários</Link>
        </main>
    )
}