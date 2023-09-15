<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="showSuccess">Tıkla</button>
  <button @click="showError">Tıkla</button>
  <button @click="showWarning">Tıkla</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import webToaster from "../../../build/index";
const toaster = new webToaster({ position: "bottom-center" });
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    showSuccess() {
      toaster.success("Successfully toasted!");
    },
    showError() {
      toaster.error("This didn't work.");
    },
    showWarning() {
      toaster.warning("Warning! Lorem ipsum dolar sit.");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
