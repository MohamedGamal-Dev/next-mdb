import Image from 'next/legacy/image';
import { FaStar } from 'react-icons/fa';

import { baseImagesURL } from '@/routes';

export const MoviePage = ({ movie }) => {
  const {
    title,
    name,
    overview,
    backdrop_path,
    release_date,
    first_air_date,
    vote_count,
    //
    homepage,
    imdb_id,
    budget,
    revenue,
    production_companies,
    vote_average,
  } = movie;
  console.log(movie);

  const details = [
    { subject: `Average Rating `, body: vote_average },
    { subject: `IMDB ID `, body: imdb_id },
    { subject: `Budget `, body: `${budget ? `$ ${budget}.00` : 'N/A'}` },
    { subject: `Revenue `, body: `${revenue ? `$ ${revenue}.00` : 'N/A'}` },
    { subject: `Relase Date `, body: `${release_date || first_air_date}` },
    { subject: `Votes `, body: vote_count },
  ];

  return (
    <div className="flex flex-col rounded-lg shadow bg-black/25 border-zinc-800">
      <div className="relative">
        <Image
          className=""
          src={baseImagesURL + backdrop_path}
          alt={title || name}
          layout="responsive"
          width={384}
          height={216}
          objectFit="cover"
          priority={true}
          placeholder="blur"
          blurDataURL={baseImagesURL + backdrop_path}
        />
      </div>

      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white lg:text-lg">
          {title || name}
        </h2>

        <p className="mb-5 font-normal text-zinc-400 ">{overview}</p>

        <section className="flex flex-col w-full mb-5 gap-2">
          {details.map((detail) => {
            const { subject, body } = detail;
            return (
              <div
                key={subject}
                className="bg-black/40 font-normal text-zinc-400 rounded w-full py-3 ml-1"
              >
                <span className="bg-zinc-900 shadow-sm shadow-zinc-900 rounded p-3 mr-2">
                  {subject}
                </span>
                {body}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
