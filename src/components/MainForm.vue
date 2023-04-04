<template>
  <div class="main">
    <StepNav />
    <section class="steps">
      <Step1 v-if="activeStep === 1" />
      <Step2 v-else-if="activeStep === 2" />
      <Step3 v-else-if="activeStep === 3" />
      <Step4 v-else-if="activeStep === 4" />
      <Step5 v-else-if="activeStep === 5" />
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
  import Step4 from "./Step4.vue";
  import Step5 from "./Step5.vue";

  export default {
    name: "MainForm",
    components: {
      StepNav,
      Step1,
      Step2,
      Step3,
      Step4,
      Step5
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

  @media(max-width: 991px) {
    .main {
      max-width: 100%;
      width: 100%;
      height: auto;
      flex-direction: column;
      padding: 0;
      background-color: transparent;
    }

    .steps {
      width: 100%;
      height: 100vh;
      margin: -173px auto 0;
      padding: 98px 0 0;
    }

    .step {
      &__mobile {
        width: calc(100% - 30px);
        background-color: $white;
        border-radius: 10px;
        margin: 0 auto 30px;
        padding: 33px 25px 20px;
      }

      &__header {
        margin-bottom: 22px;
        h2 {
          font-size: 24px;
        }

        p {
          line-height: 23px;
        }
      }
    }

    footer {
      height: 80px;
      padding: 15px;
      background-color: $white;
    }
  }
</style>