<template>
  <BaseButton :active="isExactActive" @click="navigate" />
</template>

<script>
import { computed } from "vue"
import { RouterLink, useLink } from "vue-router"

import BaseButton from "components/atoms/BaseButton.vue"

export default {
  components: { BaseButton },
  props: {
    // @ts-ignore
    ...RouterLink.props,
  },
  setup(props) {
    const { href, isExactActive, navigate } = useLink(props)

    const isExternalLink = computed(
      () => typeof props.to === "string" && props.to.startsWith("http"),
    )

    return { isExternalLink, href, navigate, isExactActive }
  },
}
</script>

<style lang="scss" scoped></style>
