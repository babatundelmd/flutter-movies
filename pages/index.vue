<template>
  <main class="main">
    <Hero :item="featured" />
    <MovieList
      :items="list"
    />
  </main>
</template>
<script>
import Hero from '~/components/Hero.vue'
import MovieList from '~/components/MovieList.vue';
import { searchMovie, filterMovieBySearch } from '~/api'
export default {
  components: {
    Hero,
    MovieList
  },

  data() {
    return {
      featured: {},
      list: {},
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        this.featured = await searchMovie('Hypnotic')
        this.list = await filterMovieBySearch('Dark')
      } catch {
        console.log('Data not available')
      }
    },
  },
}
</script>
