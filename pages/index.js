import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import { portfolioData, testimonialData } from "../data"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>EricW Next.js Portfolio</title>
        <meta name="description" content="My personal website created by create-next-app" />
      </Head>
      <Intro />
      <Portfolio portfolioData={portfolioData}/>
      <Testimonials testimonialData={testimonialData}/>
    </div>
  );
};