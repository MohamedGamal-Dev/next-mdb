import classNames from 'classnames';
import { MovieCard } from '@/features';

export const MoviesList = ({ movies }) => {
  return (
    <section
      className={classNames(
        'select-none grid grid-cols-1 gap-2 p-10',
        'md:grid-cols-2',
        'lg:grid-cols-3 lg:gap-4 lg:px-15',
        'xl:grid-cols-4 xl:px-20',
        '2xl:grid-cols-5'
      )}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
