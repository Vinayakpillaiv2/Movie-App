<template>
  <form class="search">
      <label>MOVIE NAME</label>
    <input
       type="text"
       :value="movieTitle"
       @keyup="handleChange"
    />
    <input @click="handleSubmit" type="submit" value="SEARCH" />
  </form>
</template>

<script>
  import { ref } from '@vue/composition-api';

  export default {
    name: 'Search',
    props: ['search'],
    setup({ search }, { emit }) {
      const movieTitle = ref(search);

      return {
        movieTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', movieTitle.value);
        },
        handleChange(event) {
          movieTitle.value = event.target.value
        }
      }
    }
  };
</script>
<style>
label {
    margin-right: 10px;
}

input[type="text"] {
  width: 60%;
  height: 35px;
  border-radius: 25px;
  padding-left: 20px;
}

input[type="submit"] {
    margin-left: 10px;
    border-radius: 25px;
    height: 41px;
    padding-left: 18px;
    padding-right: 18px;
}

input[type="submit"]:focus {
   outline: none;
  }

  input[type="text"]:focus {
   outline: none;
  }
</style>