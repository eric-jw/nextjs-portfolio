import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import { data } from "../data"

export default function Home({ portfolioData }) {
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
    </div>
  );
}

export const getStaticProps = async () => {
  const portfolioData = data;
  return {
    props: { portfolioData },
  };
};