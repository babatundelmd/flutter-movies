<template>
  <div>
    <div :class="$style.hero">
      <div :class="$style.backdrop">
        <div>
          <img
            :src="item.Poster"
            class="lazyload"
            :class="$style.image"
            :alt="item.Title"
          />
        </div>
      </div>
      <div :class="$style.pane">
        <transition appear name="hero">
          <div>
            <h1 :class="$style.name">
              {{ item.Title }}
            </h1>

            <div :class="$style.meta">
              <div
                v-if="item.imdbRating || item.imdbVotes"
                :class="$style.rating"
              >
                <div v-if="item.imdbRating" :class="$style.stars">
                  <div :style="{ width: `${item.imdbRating}%` }" />
                </div>

                <div v-if="item.imdbVotes" :class="$style.info">
                  <span> {{ item.imdbVotes }} Votes </span>
                </div>

                <div :class="$style.info">
                  <span>{{ item.Genre }}</span>
                </div>
              </div>

              <div :class="$style.info">
                <span>{{ item.Year }}</span>
              </div>

              <div :class="$style.info">
                <span>{{ item.Runtime }}</span>
              </div>
            </div>

            <div :class="$style.mindesc">
              <div>Actors - {{ item.Actors }}</div>
              <div>
                Language - {{ item.Language }},
                <span> Country - {{ item.Country }}</span>
              </div>
              <div v-if="item.Awards">Awards - {{ item.Awards }}</div>
              <div>Rated - {{ item.Rated }}</div>
            </div>

            <div :class="$style.desc">
              {{ item.Plot }}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {}
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/utilities/_variables.scss';

.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35rem;
  color: #999;
  background-color: #000;

  @media (min-width: $breakpoint-xsmall) {
    height: 50rem;
  }

  @media (min-width: $breakpoint-medium) {
    position: relative;
    display: block;
    height: 0;
    padding-bottom: 40%;
  }
}

.backdrop {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  min-height: 0;

  @media (min-width: $breakpoint-medium) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: 100%;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );

    @media (min-width: $breakpoint-medium) {
      background-image: linear-gradient(
        to right,
        #000 0,
        transparent 50%,
        transparent 100%
      );
    }
  }

  > div {
    width: 100%;

    @media (min-width: $breakpoint-medium) {
      display: inline;
    }
  }
}

.image {
  display: inline-block;
  max-width: 100%;
  height: 100%;

  @media (max-width: $breakpoint-medium - 1) {
    width: 100%;
    object-fit: cover;
  }
}

.pane {
  padding: 0 1.5rem 1.5rem;

  @media (min-width: $breakpoint-small) {
    padding: 0 4rem 4rem;
  }

  @media (min-width: $breakpoint-medium) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 55%;
    height: 100%;
    padding: 5rem 4rem;
  }

  @media (min-width: $breakpoint-large) {
    padding-right: 5rem;
    padding-left: 5rem;
  }

  @media (min-width: $breakpoint-xlarge) {
    width: 43%;
  }
}

.name {
  margin: 0 0 1.4rem;
  font-size: 2.8rem;
  line-height: 1.1;
  color: #fff;
  letter-spacing: $letter-spacing;

  @media (min-width: $breakpoint-small) {
    margin-bottom: 1.8rem;
  }

  @media (min-width: $breakpoint-large) {
    font-size: 2.4vw;
  }
}

.meta {
  font-size: 1.4rem;

  @media (min-width: $breakpoint-small) {
    display: flex;
  }

  @media (min-width: 1650px) {
    font-size: 0.9vw;
  }
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;

  @media (min-width: $breakpoint-small) {
    margin: 0 1.2rem 0 0;
  }
}

.stars {
  width: 8.5rem;
  height: 1.4rem;
  margin-right: 1rem;
  background-image: url('~assets/images/stars.png');
  background-repeat: no-repeat;
  background-size: auto 100%;

  @media (min-width: $breakpoint-small) {
    width: 10.3rem;
    height: 1.7rem;
  }

  > div {
    height: 100%;
    background-image: url('~assets/images/stars-filled.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
}

.info {
  display: flex;
  align-items: center;

  span {
    margin-right: 0.5rem;
  }
}

.mindesc {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.4rem;
  color: #fff;

  @media (max-width: $breakpoint-small - 1) {
    display: none;
  }

  @media (min-width: 1650px) {
    font-size: 0.9vw;
  }
}

.desc {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: $breakpoint-small - 1) {
    display: none;
  }

  @media (min-width: 1650px) {
    font-size: 0.9vw;
  }
}

.trailer {
  margin-top: 3rem;

  @media (max-width: $breakpoint-medium - 1) {
    display: none;
  }

  @media (min-width: 1650px) {
    font-size: 0.9vw;
  }
}
</style>

<style lang="scss">
.hero-enter-active,
.hero-leave-active {
  transition: transform 0.75s cubic-bezier(0.4, 0.25, 0.3, 1),
    opacity 0.3s cubic-bezier(0.4, 0.25, 0.3, 1);
}

.hero-enter,
.hero-leave-to {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
}

.hero-enter-to,
.hero-leave {
  opacity: 1;
  transform: translateZ(0);
}
</style>
