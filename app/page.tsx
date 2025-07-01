"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


// diretiva use client
// useState, useRef, useReducer, useEffect, useMemo (React.Js)
// useParams , useRouter (Next.Js)



export default function Home() {

  const [user, setUser] = useState<{name: string}>({name: ""});

  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://api.github.com/users/erosgri')

      const data = await response.json()

      console.log(data)

      setUser(data)

    }

    loadData()
  }, [])

  return (
    <main className={styles.main}>
      <h1>{user.name}</h1>
    </main>
  );
}

// "use client";
// import styles from "./page.module.css";




// export default async function Home() {


//   const response = await fetch('https://api.github.com/users/erosgri')

//   const data = await response.json()

//   console.log(data);





// return (
//   <main className={styles.main}>
//     {data.name}
//   </main>
// );
// }

