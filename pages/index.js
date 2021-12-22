import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import { data } from "../data"

export default function Home({ portfolio }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>EricW Next.js Portfolio</title>
        <meta name="description" content="My personal website created by create-next-app" />
      </Head>
      <Intro />
      <Portfolio />
    </div>
  );
}

export const getStaticProps = async () => {
  const portfolio = data;
  return {
    props: { portfolio },
  };
};