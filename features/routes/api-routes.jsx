export const baseURL = 'https://api.themoviedb.org/3';
export const baseImagesURL = 'https://image.tmdb.org/t/p/original';

export const API_KEY = process.env.API_KEY;

export const apiRequests = {
  popular: {
    title: 'Popular',
    url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  },
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  top_rated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  now_playing: {
    title: 'Now Playing',
    url: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  },
};
