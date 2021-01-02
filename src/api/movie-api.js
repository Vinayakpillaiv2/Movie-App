import { reactive, watch } from '@vue/composition-api';

const API_KEY = '8a701380ab3802a262124a6d40864c85';

export const useApi = () => {
    const state = reactive({
      search: 'Jurassic Park',
      movies: []
    });
  
    watch(() => {
      const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${state.search}`;
  
      fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          state.movies = jsonResponse.results;
        });
    });
  
    return state;
  };