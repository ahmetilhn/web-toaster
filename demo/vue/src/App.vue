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
const toaster = new webToaster({});
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    showSuccess() {
      toaster.success("Sucess toast message!" + new Date().getSeconds());
    },
    showError() {
      toaster.error("Sucess toast message!" + new Date().getSeconds());
    },
    showWarning() {
      toaster.warning("Sucess toast message!" + new Date().getSeconds());
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
