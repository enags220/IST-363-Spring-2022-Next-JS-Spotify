import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/Button'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import TracksByGenre from '../components/TracksByGenre'

export default function Home() {
  return (
    <div className="container">
    <Layout>
      <Head>
        <title>Creeeeeeate Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a summary of my website"/>
      </Head>

      <main>
        <Image
          src="/images/profile.jpg"
          width={200}
          height={265}
          alt="Ethan and Henle"
        />

        <Heading level="1">
          <Link href="/posts/first-post">
            <a>Firrrrrrst Post</a>
          </Link>
        </Heading>


        <Heading level="1">
          Contact page title
        </Heading>
        <Heading level="2">
          Section title goes here
        </Heading>
        <Heading level="3">
          Item title goes here
        </Heading>
        <Heading></Heading>
        <Heading></Heading>

        <Paragraph intro>
          Intro paragraph goes here
        </Paragraph>
        <Paragraph>
          Secondary paragraph goes here
        </Paragraph>

        <Button 
          label="Register now"
          path="/posts/first-post"
          type="primary"
        />
        <Button 
          label="Learn more"
          path="/posts/first-post"
          type="secondary"
        />
        <Button 
          label="Download now"
          path="/posts/first-post"
          type="primary"
        />
        <TracksByGenre 
        />

      </main>

      <footer>
        IST 363 Spotify
      </footer>
    </Layout>
    </div>
  )
}
