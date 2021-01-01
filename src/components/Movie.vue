<template>

  <div class="movie">
    <div class="column left">
    <div>
      <img width="200"  :src="imgsrc" />
    </div>
    </div>
    <div class="column right">
    <h2>{{ movie.original_title }}</h2>
    <h4>RELEASE DATE: {{ movie.release_date }}</h4>
    <h4>RATING: {{ movie.vote_average }}</h4>
    <p>{{ movie.overview }}</p>
    </div>
  </div>
     
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    name: "Movie",
    props: ['movie'],
    setup({ movie }) {
        console.log(movie)
      const imgsrc = computed(() => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
      return { imgsrc };
    }
  };
</script>
<style scoped>
.movie {
  display: flex;
  background: white;
  margin-left: 137px;
  margin-right: 135px;
  border-radius: 20px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}


.left {
  flex: 30%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.right {
  flex: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}

@media screen and (max-width: 600px) {
  .left, .right {
    flex: 100%;
  }
}
</style>