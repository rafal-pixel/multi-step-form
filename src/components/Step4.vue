<template>
  <article class="step">
    <div class="step__mobile">
      <header class="step__header">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </header>
      <div class="form">

        <template v-for="item in planInfo.items">
          <div class="selected-plan" v-if="item.choice==1">
            <div class="selected-plan__text">
              <div>
                {{ item.title }} (<span v-if="planInfo.choice==0">Monthly</span>
                <span v-if="planInfo.choice==1">Yearly</span>)
              </div>
              <a href="" @click="chacngePlan">Change</a>
            </div>
            <div class="selected-plan__price" v-if="planInfo.choice==0">
              ${{ item.month }}/mo
            </div>
            <div class="selected-plan__price" v-if="planInfo.choice==1">
              ${{ item.year }}/yr
            </div>
          </div>
        </template>

        <template v-for="item in accessoriesInfo">
          <div class="accessories-item" v-if="item.choice==1">
            <div class="accessories-item__text">
              {{ item.mainText }}
            </div>
            <div class="accessories-item__price" v-if="planInfo.choice==0">
              +${{ item.month }}/mo
            </div>
            <div class="accessories-item__price" v-if="planInfo.choice==1">
              +${{ item.year }}/yr
            </div>
          </div>
        </template>
      </div>
      <div class="total-price">
        <div class="total-price__text">
          Total (<span v-if="planInfo.choice==0">per month</span>
          <span v-if="planInfo.choice==1">per year</span>)
        </div>
        <div class="total-price__price">{{ sumValue }}</div>
      </div>
    </div>
    <footer>
      <button class="btn-back" @click="prevStep">Go Back</button>
      <button class="btn" @click="nextStep">Confirm</button>
    </footer>
  </article>
</template>

<script>
  import {
    mapGetters,
  } from 'vuex';
  export default {
    name: "Step4",
    data() {
      return {
        sum: 0,
      }
    },
    methods: {
      chacngePlan(e) {
        e.preventDefault();
        this.$store.commit('setStep');
      },
      nextStep() {
        this.$store.commit('activeStepPlus');
      },
      prevStep() {
        this.$store.commit('activeStepMinus');
      },
      planMonthly() {
        const findIndex = this.planInfo.items.findIndex(el => el.choice == 1);
        this.sum += this.planInfo.items[findIndex].month;
        this.accessoriesInfo.forEach(el => {
          if (el.choice == 1) {
            this.sum += el.month;
          }
        });
        return this.sum;
      },
      planYearly() {
        const findIndex = this.planInfo.items.findIndex(el => el.choice == 1);
        this.sum += this.planInfo.items[findIndex].year;
        this.accessoriesInfo.forEach(el => {
          if (el.choice == 1) {
            this.sum += el.year;
          }
        });
        return this.sum;
      }
    },
    computed: {
      ...mapGetters(['accessoriesInfo']),
      ...mapGetters(['planInfo']),
      sumValue() {
        if (this.planInfo.choice == 0) {
          return `+$${this.planMonthly()}/mo`
        }
        if (this.planInfo.choice == 1) {
          return `+$${this.planYearly()}/yr`
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/styles/_variables.scss";

  .step {
    padding-bottom: 17px;
  }

  .form {
    background: $Alabaster;
    border-radius: 8px;
    padding: 20px 25px 13px 20px;
    margin-bottom: 25px;
  }

  .selected-plan {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 25px;
    border-bottom: 1px solid $light-gray;
    margin-bottom: 5px;

    &__text {
      display: flex;
      flex-direction: column;

      div {
        color: $marine-blue;
        font-weight: $bold;
        padding-bottom: 5px;
      }

      a {
        font-size: 14px;
        color: $color-gray;
        font-weight: $medium;
        text-decoration: underline;

        &:hover {
          color: hsl(244, 52%, 64%);
        }
      }
    }

    &__price {
      color: $marine-blue;
      font-weight: $bold;
    }
  }

  .accessories-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    &__text {
      font-size: 14px;
      color: $color-gray;
      font-weight: $medium;
    }

    &__price {
      font-size: 15px;
      color: $marine-blue;
      font-weight: $regular;
    }
  }

  .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px 0 20px;

    &__text {
      font-size: 14px;
      color: $color-gray;
      font-weight: $medium;
    }

    &__price {
      color: hsl(244, 52%, 64%);
      font-size: 20px;
      font-weight: $bold;
    }
  }

  .btn {
    background-color: $purplish-blue;

    &:hover {
      background-color: rgba(107, 100, 206, .7);
    }
  }

  @media(max-width: 991px) {
    .step {
      padding-bottom: 0;
    }

    .form {
      padding: 20px 17px 8px 15px;
    }

    .selected-plan {
      font-size: 14px;
      padding-bottom: 12px;

      &__text {
        div {
          padding-bottom: 2px;
        }
      }
    }

    .accessories-item {
      padding: 8px 0;
    }

    .total-price {
      padding: 0 15px 0 15px;

      &__price {
        font-size: 17px;
      }
    }

    .step__mobile {
      padding-bottom: 30px;
    }
  }
</style>