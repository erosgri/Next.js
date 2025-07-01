"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";


// diretiva use client
// useState, useRef, useReducer, useEffect, useMemo (React.Js)
// useParams , useRouter (Next.Js)



export default function Home() {

  const router = useRouter();

  const [user, setUser] = useState<{name: string}>({name: ""});

  function makeLogin(){
    setCookie("token", "meunovotokensalvonocookiehoje")
    router.push('/dashboard/users')

  }

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
      <button onClick={makeLogin}>Fazer Login</button>
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

