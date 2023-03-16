<template>
  <div class="siedbar">
    <nav class="nav">
      <div v-for="(step, index) in steps" :key="index" class="nav__step" :class="{ 'active' : index === activeStep }">
        <div class="nav__number">
          {{ index+1 }}
        </div>
        <div class="nav__desc">
          <span>Step {{ index+1 }}</span>
          <h4>{{ step }}</h4>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "StepNav",
    data() {
      return {
        steps: ["Your info", "Select plan", "Add-ons", "summary"]
      }
    },
    props: {
      activeStep: String
    },
    watch: { // It listens to the change in prop name
      activeStep: function () {
        console.log("name change"); // print out when the name changes
      },
    },
    components: {},
    computed: {

    },
    setup(props) {
      console.log(props.activeStep)
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
</style>