export const baseURL = 'https://api.themoviedb.org/3';

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
};