import './index.css'
import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"

import { fallbackImg } from "./shared/directives"
import eventCaster from "./plugins/eventCaster"

const app = createApp(App)

eventCaster.set(app)

app.directive("img-fallback", fallbackImg)

app.use(router).mount("#app")
