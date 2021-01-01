<template>
  <div class="App">
    <Header :title="'Movie Search API'" />
    <Search :search="state.search" @search="handleSearch" />
    
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
  import { reactive, watch } from '@vue/composition-api';
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Movie from './components/Movie.vue';

   const API_KEY = '8a701380ab3802a262124a6d40864c85';

  export default {
    name: 'app',
    components: {
      Header, Search, Movie
    },
    setup() {
      const state = reactive({
        search: 'Jurassic Park',
        loading: true,
        movies: [],
        errorMessage: null
      });

      watch(() => {
         const MOVIE_API_URL = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${state.search}`;

        fetch(MOVIE_API_URL)
          .then(response => response.json())
          .then(jsonResponse => {
            state.movies = jsonResponse.results;
            console.log(state.movies);
            state.loading = false;
          });
      });

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>
<style scoped>

.App{
  text-align: center;
  background-color: aliceblue;
}

.search {
  margin-bottom: 25px;
}


</style>