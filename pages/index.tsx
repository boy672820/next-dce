import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import UsedComponent from '../components/UsedComponent';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js - Dead Code Elimination</title>
        <meta name='description' content='Dead code elimination test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <UsedComponent />
      </main>
    </div>
  );
};

export default Home;
