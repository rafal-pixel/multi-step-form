<template>
  <div class="main">
    <StepNav :activeStep=activeStep />
  </div>
</template> 

<script>
import StepNav from "./StepNav.vue";

export default {
  name: "MainForm",
  data() {
    return {
      activeStep: 0,
    }
  },
  props: {},
  components: {
    StepNav,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";
.main {
  height: 600px;
  max-width: 940px;
  width: 100%;
  background-color: $white;
  border-radius: 15px;
  padding: 16px;
}
</style>
