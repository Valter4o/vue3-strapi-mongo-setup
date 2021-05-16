<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_index.scss";

@keyframes logoAnimation {
  0% {
  }
  50% {
    transform: translate(-50%, -50%) rotate3d(0, 1, 0, 180deg);
  }
  100% {
  }
}
.loader {
  position: relative;

  width: 100%;
  height: 100%;

  background-color: $c-accent;
  &__spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 300px;
    height: 350px;

    background-image: url(../../../static/icons/dyk-logo.svg);
    background-size: 100%;
    background-repeat: repeat-x;

    transition: all 0.3s linear;

    animation-name: logoAnimation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
</style>
