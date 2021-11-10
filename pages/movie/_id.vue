<template>
  <main class="main">
    <Hero :item="item" />
  </main>
</template>

<script>
import { getMovie } from '~/api'
import Hero from '~/components/Hero'

export default {
  components: {
    Hero,
  },

  async asyncData({ params }) {
    try {
      const item = await getMovie(params.id)
      return { item }
    } catch {
      console.log('Page not found')
    }
  },
}
</script>
