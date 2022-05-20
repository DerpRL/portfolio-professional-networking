import type { NextPage } from 'next'
import Head from "next/head"
import { DefaultHeader } from "../components/header/DefaultHeader"

const Home: NextPage = () => {
  return (
      <>
          <Head>
            <title>Yarne Savaete</title>
          </Head>

          <header>
            <DefaultHeader />
          </header>
      </>
  )
}

export default Home
