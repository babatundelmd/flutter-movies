<template>
  <nav :class="$style.nav">
    <ul>
      <li>
        <Search />
      </li>
    </ul>
  </nav>
</template>

<script>
import Search from '~/components/Search.vue'

export default {
  components: {
    Search,
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/utilities/_variables.scss';

.nav {
  position: fixed;
  overflow: hidden;
  display: flex;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 5rem;
  background-color: #000;

  @media (min-width: $breakpoint-large) {
    top: 0;
    right: auto;
    width: 100%;
    border-right: 1px solid $secondary-color;
  }

  ul {
    display: flex;
    @media (min-width: $breakpoint-large) {
      flex-direction: row;
      justify-content: space-between;
    }

    li {
      display: flex;
      padding: 2rem;
      justify-content: space-between;
      @media (min-width: $breakpoint-large) {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    outline: 0;
    transition: all 0.2s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
</style>
