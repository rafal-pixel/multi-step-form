<template>
  <MainForm />
</template>

<script>
import MainForm from "./components/MainForm.vue";

export default {
  name: "App",
  components: {
    MainForm,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: $Magnolia;
  font-family: $font-family;
  font-size: 16px;
  padding-top: 105px;
}
</style>
