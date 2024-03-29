import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'




export default function Home() {
	const { data: session, status } = useSession()

	useEffect(() => {
		console.log(session)

	}, [session])
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>Hello world!</h1>
				<h1>{status}</h1>
				<h1>{session && session.user.email}</h1>
				<h2>{session && session.user.name}</h2>
				<img src={session && session.user.image} alt="" />
				<button onClick={() => signIn()}>login</button>
				<button onClick={() => signOut()}>logout</button>
			</main>
		</>
	)
}
