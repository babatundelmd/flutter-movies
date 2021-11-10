<template>
  <div class="listing">
    <div class="listing__head">
      <h2 class="listing__title">Showing Results For "Dark"</h2>
    </div>

    <div class="listing__items">
      <MovieCard v-for="(item, i) in items" :key="i" :item="item" />
    </div>

    <div class="listing__nav">
      <div v-if="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          stroke="#2196f3"
        >
          <g fill="none" fill-rule="evenodd" stroke-width="2">
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="0s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="-0.9s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="-0.9s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>
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
    title: {
      type: String,
      required: false,
      default: '',
    },

    items: {},

    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {},
}
</script>
