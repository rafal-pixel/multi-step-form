<template>
  <article class="step">
    <header class="step__header">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
    </header>
    <div class="form">

    </div>
    <footer>
      <button class="btn-back" @click="prevStep">Go Back</button>
      <button class="btn" @click="nextStep">Next Step</button>
    </footer>
  </article>
</template>

<script>
  import {
    mapGetters,
  } from 'vuex';
  export default {
    name: "Step3",
    data() {
      return {
      }
    },
    methods: {
      nextStep() {
        this.$store.commit('activeStepPlus');
      },
      prevStep() {
        this.$store.commit('activeStepMinus');
      }
    },
    computed: {
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/styles/_variables.scss";

  .step {
  }

</style>