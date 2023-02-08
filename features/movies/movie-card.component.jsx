import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import { baseImagesURL } from '../routes';

export const MovieCard = ({ movie }) => {
  const {
    title,
    name,
    overview,
    backdrop_path,
    release_date,
    first_air_date,
    vote_count,
  } = movie;

  return (
    <div className="flex flex-col rounded-lg shadow bg-black/25 border-zinc-800 md:hover:scale-95 lg:hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <Image
          className="rounded-t-lg"
          src={baseImagesURL + backdrop_path}
          alt={title || name}
          layout="responsive"
          width={384}
          height={216}
          objectFit="cover"
          priority={true}
        />
      </div>

      <div className="p-4">
        <Link href="#">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white truncate lg:text-lg">
            {title || name}
          </h2>
        </Link>
        <p className="mb-3 font-normal text-zinc-400 truncate">{overview}</p>

        <div className="font-light text-sm text-zinc-400 flex flex-row items-center justify-between">
          <span className="">{release_date || first_air_date}</span>

          <div className="flex flex-row items-center">
            <FaStar className="mr-1" />
            {vote_count}
          </div>
        </div>
      </div>
    </div>
  );
};
