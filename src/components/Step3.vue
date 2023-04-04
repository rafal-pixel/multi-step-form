<template>
  <article class="step">
    <div class="step__mobile">
      <header class="step__header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>
      <div class="form">
        <template v-for="(item, index) in accessoriesInfo" :key="index">
          <label class="addons-checkbox" :class="{'active' : item.choice==1}">
            <input type="checkbox" true-value="1" false-value="0" v-model="item.choice">
            <div class="addons-checkbox__checkmark"></div>
            <div class="addons-checkbox__text">
              <span class="mainText">{{ item.mainText }}</span>
              <span class="subText">{{ item.subText }}</span>
            </div>
            <div class="addons-checkbox__price">
              <div v-if="planInfo.choice==0">
                +${{ item.month }}/mo
              </div>
              <div v-if="planInfo.choice==1">
                +${{ item.year }}/yr
              </div>
            </div>
          </label>
        </template>
      </div>
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
      return {}
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
      ...mapGetters(['accessoriesInfo']),
      ...mapGetters(['planInfo'])
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/styles/_variables.scss";

  .step {
    padding-bottom: 17px;
  }

  .addons-checkbox {
    position: relative;
    width: 100%;
    height: 81px;
    display: flex;
    align-items: center;
    border: 1px solid $light-gray;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 22px;
    cursor: pointer;
    transition: .3s;

    &.active {
      border-color: hsl(244, 52%, 64%);
      background-color: $Alabaster;
    }

    &:hover {
      border-color: hsl(244, 52%, 64%);
    }

    input {
      position: absolute;
      visibility: hidden;
      opacity: 0;

      &:checked~.addons-checkbox__checkmark {
        background-color: $purplish-blue;
        background-color: $purplish-blue;
      }
    }

    &__checkmark {
      width: 21px;
      height: 21px;
      border: 1px solid $light-gray;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 9px;
        background-image: url('../assets/images/icon-checkmark.svg');
        background-repeat: no-repeat;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      padding-left: 25px;

      .mainText {
        color: $marine-blue;
        font-weight: $bold;
        padding-bottom: 5px;
      }

      .subText {
        font-size: 14px;
        color: $color-gray;
        font-weight: $regular;
      }
    }

    &__price {
      color: hsl(244, 52%, 64%);
      font-size: 14px;
      font-weight: $medium;
      letter-spacing: 0.04em;
      margin-left: auto;
    }
  }

  @media(max-width: 991px) {
    .step {
      padding-bottom: 0;
    }

    .addons-checkbox {
      height: 60px;
      padding: 0 15px;

      &__text {
        padding-left: 15px;

        .mainText {
          font-size: 14px;
          padding-bottom: 2px;
        }

        .subText {
          font-size: 12px;
        }
      }

      &__price {
        font-size: 12px;
      }
    }
  }
</style>