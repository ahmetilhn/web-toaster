<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="showNotifi">Tıkla</button>
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
    showNotifi() {
      console.log(toaster.success("test"));
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
