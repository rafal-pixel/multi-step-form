<template>
  <MainForm/>
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

.btn {
  outline: 0;
  border: 0;
  height: 49px;
  min-width: 125px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $marine-blue;
  border-radius: 8px;
  padding: 0 20px 2px;
  transition: .2s;
  cursor: pointer;

  font-size: 16px;
  color: $Magnolia;
  font-weight: $medium;
  letter-spacing: 0.02em;
  font-family: $font-family;

  &:hover {
    background-color: hsl(214, 72%, 32%);
  }
}
.btn-back {
  outline: 0;
  border: 0;
  display: inline-flex;
  background-color: transparent;
  color: $color-gray;
  font-size: 16px;
  font-weight: $medium;
  font-family: $font-family;
  cursor: pointer;
}
</style>
