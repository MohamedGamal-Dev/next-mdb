import axios from 'axios';

import { MoviePage } from '@/features';
import { baseURL, API_KEY } from '@/routes';

const MovieSinglePage = ({ movie }) => {
  console.log(movie)
  return (
    <>
      <MoviePage movie={movie} />
    </>
  );
};

export default MovieSinglePage;

export const getServerSideProps = async (context) => {
  const movieId = context.query.movieId;
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}?api_key=${API_KEY}`
  );

  return {
    props: { movie: data },
  };
};
