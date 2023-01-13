<script lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import iCalendarPlugin from "@fullcalendar/icalendar";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, iCalendarPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        eventClick: function (info: any) {
          alert("event click! " + info.event.title);
        },
        events: {
          url:
            "https://corsproxy.io/?" +
            encodeURIComponent(
              "https://calendar.google.com/calendar/ical/5mkep1ad1j860k6g7i7fr8plq0%40group.calendar.google.com/public/basic.ics"
            ),
          format: "ics",
        },
      },
    };
  },
  methods: {
    handleDateClick: function (arg: any) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
<template>
  <header>
    <h1>FullCalendar Vue3 Demo</h1>
  </header>
  <div class="container">
    <FullCalendar class="test" :options="calendarOptions" />
  </div>
</template>

<style scoped>
.container {
  padding: 50px;
}
.FullCalendar {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
</style>
