<template>
  <div :class="$style.form">
    <form autocomplete="off" @submit.prevent>
      <div :class="$style.field">
        <input
          id="search"
          ref="input"
          v-model.trim="query"
          name="search"
          type="text"
          placeholder="Search for a movie..."
          @keyup.enter="goToRoute"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: this.$route.query.q ? this.$route.query.q : '',
    }
  },

  mounted() {
    this.$refs.input.focus()
  },

  methods: {
    goToRoute() {
      if (this.query) {
        this.$router.push({
          name: 'search',
          query: { q: this.query },
        })
        this.query = ''
      } else {
        this.$router.push({
          path: this.fromPage,
        })
      }
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/utilities/_variables.scss';

.form {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  @media (min-width: $breakpoint-large) {
    left: 2rem;
  }

  input {
    font-size: 1.3rem;
  }

  input[type='text'] {
    height: 5rem;
    padding: 2.1rem 1.5rem;
    color: #fff;
    background: none;
    border-radius: 10;
    border: 0;
    outline: 0;
  }
}

.field {
  display: flex;
  background-color: $secondary-color;
  width: auto;
  justify-items: end;
}
</style>
