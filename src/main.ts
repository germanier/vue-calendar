import { createApp } from "vue";
import App from "./App.vue";

// Calendar components
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import iCalendarPlugin from "@fullcalendar/icalendar";
import ical from "ical";

// PrimeVue
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// Importing the CSS files
import "primevue/resources/themes/vela-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "@/assets/css/app.css"; //custom global css

const app = createApp(App);

// Calendar components
app.component("FullCalendar", FullCalendar);
app.component("dayGridPlugin", dayGridPlugin);
app.component("interactionPlugin", interactionPlugin);
app.use("ical", ical);
app.component("iCalendarPlugin", iCalendarPlugin);
// PrimeVue
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.mount("#app");
