<template>
  <article class="step">
    <div class="step__mobile">
      <header class="step__header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>
      <div class="form">
        <div class="radios">
          <label class="custom-radio" v-for="(item, index) in planInfo.items" :key="index"
            :class="{ 'active' : item.title===plan}">
            <input type="radio" :value="item.title" v-model="plan">
            
            <div>
              <span class="title">{{ item.title }}</span>
              <div v-if="planInfo.choice==0">
                <span class="price">${{ item.month }}/mo</span>
              </div>
              <div v-if="planInfo.choice==1">
                <span class="price">${{ item.year }}/yr</span> <br>
                <span class="info">{{ item.promotionYear }}</span>
              </div>
            </div>
          </label>
        </div>
        <label class="switch-price">
          <span :class="{ 'active' : planInfo.choice==0}">Monthly</span>
          <input type="checkbox" true-value="1" false-value="0" v-model="planInfo.choice">
          <span class="slider"></span>
          <span :class="{ 'active' : planInfo.choice==1}">Yearly</span>
        </label>
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
    name: "Step2",
    data() {
      return {
        plan: 'Arcade',
      }
    },
    methods: {
      nextStep() {
        if (this.plan !== '') {
          this.$store.commit('setPlan', {
            choice: this.planInfo.choice,
            choicePlan: this.plan
          })
          this.$store.commit('activeStepPlus');
        }
      },
      prevStep() {
        this.$store.commit('activeStepMinus');
      }
    },
    computed: {
      ...mapGetters(['planInfo'])
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/styles/_variables.scss";


  .radios {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  }

  .custom-radio {
    min-height: 160px;
    width: calc(calc(100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid $light-gray;
    border-radius: 10px;
    cursor: pointer;

    &.active {
      border-color: $marine-blue;
      background-color: $Alabaster;
    }

    input {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    img {
      margin-bottom: 42px;
    }

    .title {
      display: inline-flex;
      color: $marine-blue;
      font-size: 16px;
      font-weight: $medium;
      margin-bottom: 2px;
    }

    .price {
      display: inline-flex;
      color: $color-gray;
      font-size: 14px;
    }

    .info {
      display: inline-flex;
      color: $marine-blue;
      font-size: 12px;
      margin-top: 9px;
    }
  }

  .switch-price {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $Alabaster;
    border-radius: 10px;

    input {
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked+.slider:before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
      }
    }

    .slider {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 20px;
      background-color: $marine-blue;
      border-radius: 20px;
      transition: .4s;
      margin: 0 24px;
      cursor: pointer;

      &:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 100%;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }

    span {
      font-size: 15px;
      color: $color-gray;
      font-weight: $medium;
      letter-spacing: -0.02em;

      &.active {
        color: $marine-blue;
      }
    }
  }

  @media(max-width: 991px) {
    .radios {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 23px;
    }

    .custom-radio {
      min-height: 79px;
      width: 100%;
      flex-direction: row;
      padding: 15px 10px;

      img {
        margin-bottom: 0;
        margin-right: 15px;
      }
    }
    .step__mobile {
      padding-bottom: 30px;
    }
  }
</style>
