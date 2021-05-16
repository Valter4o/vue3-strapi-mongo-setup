<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <template #default>
        <div class="router-container">
          <Header />
          <component :is="Component" />
          <Footer />
        </div>
      </template>
      <template #fallback> <div></div> </template>
    </suspense>
  </router-view>
</template>

<script>
import { provide } from "vue"
import { useRoute, useRouter } from "vue-router"

import Header from "components/organisms/Header.vue"
import Footer from "components/organisms/Footer.vue"

export default {
  components: { Header, Footer },
  setup() {
    // Don't even ask
    document.querySelector("body").style.cssText =
      "margin:0; min-height: 100vh;"

    const context = {
      router: useRouter(),
      route: useRoute(),
    }

    provide("context", context)
    return {}
  },
}
</script>

<style lang="scss" scoped>
.router-container {
  min-height: 100vh;
}
</style>
