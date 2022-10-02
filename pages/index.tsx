import type { NextPage } from 'next'
import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import Player from '../components/Player';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Spotify clone using Nextjs, Middleware, Spotify API, NextAuth, Recoil' />
      </Head>

      <div className='bg-black h-screen overflow-hidden'>
        <main className='flex'>
          {/* Sidebar */}
          <Sidebar />
          {/* Center */}
          <Center />
        </main>

        <div>
          <Player />
        </div>
      </div>

      {/* Player */}
      <div></div>
    </div>

  )
}

export default Home
export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}