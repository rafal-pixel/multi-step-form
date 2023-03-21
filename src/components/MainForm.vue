<template>
  <div class="main">
    <StepNav />
    <section class="steps">
      <Step1 v-if="activeStep === 1" />
      <Step2 v-else-if="activeStep === 2" />
      <Step3 v-else-if="activeStep === 3" />
    </section>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import StepNav from "./StepNav.vue";
  import Step1 from "./Step1.vue";
  import Step2 from "./Step2.vue";
  import Step3 from "./Step3.vue";

  export default {
    name: "MainForm",
    components: {
      StepNav,
      Step1,
      Step2,
      Step3,
    },
    computed: {
      ...mapGetters(['activeStep'])
    }
  };
</script>

<style lang="scss">
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
    padding: 39px 9% 0 11%;
  }

  .step {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
      margin-bottom: 40px;

      h2 {
        color: $marine-blue;
        font-size: 32px;
        margin-bottom: 12px;
      }

      p {
        color: $color-gray;
        font-size: 17px;
        letter-spacing: -0.03em;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }
</style>