import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ACgames!" />
        <p className="description">
          A & C Games is your number one stop shop for retro classics, rare collectibles, and hot new titles
        </p>
      </main>

      <Footer />
    </div>
  )
}
