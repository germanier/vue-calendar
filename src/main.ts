import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";

import Button from "primevue/button";

import "./assets/main.css";

const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");
