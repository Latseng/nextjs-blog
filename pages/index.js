import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Johnson. I'm a front-end enginer and a Strength and
          Conditioning Coach. You can contact me on{" "}
          <a href="https://johnsontseng.com/">My site</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
