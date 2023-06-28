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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>

    Skyward canyons rise majestically above the rugged landscape, defying gravity and captivating the imagination. These towering geological formations, often found in remote and untouched corners of the world, beckon adventurers and nature enthusiasts alike. Carved by the forces of wind and water over millions of years, these canyons are characterized by their sheer vertical walls that seem to reach for the sky. Standing at the edge of a skyward canyon, one can't help but feel a sense of awe and wonder at the grandeur of nature's sculpting prowess.
        </p>
      </main>

      <Footer />
    </div>
  )
}
