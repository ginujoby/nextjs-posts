import Head from 'next/head'
import Layout from '../components/common/Layout';
import Link from "next/link";
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>NextJS Posts App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Typography variant="h6">
            <Link href="/posts">View Posts &raquo;</Link>
        </Typography>
    </Layout>
  )
}
