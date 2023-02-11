import Head from 'next/head';
import axios from 'axios';

import { MoviesList } from '@/features';
import { baseURL, apiRequests } from '@/routes';
import { results } from '@/utils';

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Next MDB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MoviesList movies={movies} />
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre || "now_playing";

  const { data } = await axios.get(`${baseURL}${apiRequests[genre].url}`);
  return {
    props: { movies: data.results },
  };
  
  // DEV - MODE ONLY
  // return {
  //   props: { movies: results },
  // };
};
