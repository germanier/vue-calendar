<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const arr = ["warn", "success", "info", "error"];
const counter = ref<number>(0);
const text_ = ref("Hello World");
const toast = useToast();
const greet = () => {
  toast.add({
    severity: arr[counter.value % 4],
    summary: "Success",
    detail: text_.value,
    life: 30000,
  });
};
</script>

<template>
  <Toast></Toast>
  <div class="container">
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="text_" />
      <label for="username">Username</label>
    </span>
    <Button
      label="Submit"
      @click="
        greet();
        counter++;
      "
      icon="pi pi-user"
    ></Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
