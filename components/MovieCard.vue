<template>
  <div class="card">
    <nuxt-link
      class="card__link"
      :to="{ name: `movie-id`, params: { id: item.imdbID } }"
    >
      <div class="card__img">
        <img
          v-if="item.Poster"
          class="lazyload"
          :src="item.Poster"
          :alt="item.Title"
        />
      </div>

      <h2 v-if="item.Title" class="card__name">
        {{ item.Title }}
      </h2>

      <div class="card__rating">
        <div class="card__stars">
          <div :style="{ width: `${item.imdbRating}%` }" />
        </div>

        <div v-if="item.imdbVotes" class="card__vote">
          {{ item.imdbVotes }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: [],
  },
}
</script>
