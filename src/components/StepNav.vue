<template>
  <div class="siedbar">
    <nav class="nav">
      <div v-for="step in stepsNav" :key="step.id" class="nav__step" :class="{ 'active' : step.id === activeStep }">
        <div class="nav__number">
          {{ step.id }}
        </div>
        <div class="nav__desc">
          <span>Step {{ step.id }}</span>
          <h4>{{ step.title }}</h4>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    name: "StepNav",
    computed: {
      ...mapGetters(['stepsNav', 'activeStep'])
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/styles/_variables.scss";

  .siedbar {
    background: no-repeat url(../assets/images/bg-sidebar-desktop.svg) 100% 100%;
    width: 275px;
    height: 100%;
    padding: 39px 32px;
  }

  .nav {

    &__step {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      &.active {
        .nav__number {
          color: $marine-blue;
          background-color: $light-blue;
          border-color: $light-blue;
        }
      }
    }

    &__number {
      width: 33px;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $white;
      border-radius: 100%;
      padding-bottom: 2px;

      color: $white;
      font-weight: $medium;
    }

    &__desc {
      padding-left: 17px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      text-transform: uppercase;

      span {
        display: inline-flex;
        margin-bottom: 3px;
        color: $light-gray;
        font-size: 12px;
      }

      h4 {
        color: $Magnolia;
        font-size: 15px;
        font-weight: $medium;
        letter-spacing: 0.05em;
      }
    }
  }

  @media(max-width: 991px) {
    .siedbar {
      background: no-repeat url(../assets/images/bg-sidebar-mobile.svg);
      background-size: cover;
      width: 100%;
      height: 173px;
      display: flex;
      justify-content: center;
      padding: 32px 20px;
    }
    .nav {
      display: flex; 
      &__step {
        align-items: flex-start;
        margin: 0 8px;
      }
      &__desc {
        display: none; 
      }
    }
  }
</style>