<template>
  <div class="main">
    <StepNav />
      <section class="steps">
          <Step1 v-if="activeStep === 1"/>
          <Step2 v-else-if="activeStep === 2"/>
      </section>
  </div>
</template> 

<script>
import {mapGetters} from 'vuex';
import StepNav from "./StepNav.vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";

export default {
  name: "MainForm",
  components: {
    StepNav,
    Step1,
    Step2,
  },
  computed: {
    ...mapGetters(['activeStep'])
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";
.main {
  height: 600px;
  max-width: 940px;
  width: 100%;
  display: flex;
  background-color: $white;
  border-radius: 15px;
  padding: 16px;
}
.steps {
  position: relative;
  width: calc(100% - 275px);
  padding: 0 9% 0 11%;
}
</style>
