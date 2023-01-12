import { createApp } from "vue";
import App from "./App.vue";

// PrimeVue
import PrimeVue from "primevue/config";

// primevue components
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// Importing the CSS files
import "primevue/resources/themes/vela-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "@/assets/css/app.css"; //custom global css

// create the app
const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.mount("#app");
