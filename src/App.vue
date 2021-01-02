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
  //import { reactive, watch } from '@vue/composition-api';
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Movie from './components/Movie.vue';
  import { useApi } from './api/movie-api';

   //const API_KEY = '8a701380ab3802a262124a6d40864c85';

  export default {
    name: 'app',
    components: {
      Header, Search, Movie
    },
    setup() {
      const state = useApi();

      return {
        state,
        handleSearch(searchTerm) {
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