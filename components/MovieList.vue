<template>
  <div class="listing">
    <div class="listing__head">
      <h2 class="listing__title">Showing Results For "Dark"</h2>
    </div>
    <div class="listing__items">
      <MovieCard v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue'

export default {
  components: {
    MovieCard,
  },

  props: {
    items: {},
  },

  methods: {},
}
</script>
