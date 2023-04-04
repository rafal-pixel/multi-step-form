<template>
    <article class="step">
        <div class="step__mobile">
            <header class="step__header">
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </header>
            <div class="form">
                <label ref="name">
                    <span>Name</span>
                    <span class="error-text">This field is required or not in the correct format</span>
                    <input type="text" placeholder="e.g. Stephen King" v-model="name" @input="nameFofus">
                </label>
                <label ref="email">
                    <span>Email Address</span>
                    <span class="error-text">This field is required or not in the correct format</span>
                    <input type="text" placeholder="e.g. stephanking@lorem.com" v-model="email" @input="emailFofus">
                </label>
                <label ref="phone">
                    <span>Phone Number</span>
                    <span class="error-text">This field is required or not in the correct format</span>
                    <input type="text" placeholder="e.g. +1 234 567 890" v-model="phone" @input="phoneFofus">
                </label>
            </div>
        </div>
        <footer>
            <button class="btn" @click="nextStep">Next Step</button>
        </footer>
    </article>
</template>

<script>
    import {
        mapGetters,
    } from 'vuex';
    export default {
        name: "Step1",
        data: function () {
            return {
                name: '',
                email: '',
                phone: '',
                check: 0,
            }
        },
        methods: {
            validateEmail(email) {
                return String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
            },
            validatePhone(phone) {
                return String(phone)
                    .toLowerCase()
                    .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/)
            },
            checkName() {
                this.name.length > 2 ? this.$refs.name.classList.remove('error') : this.$refs.name.classList.add('error');
            },
            checkEmail() {
                this.validateEmail(this.email) ? this.$refs.email.classList.remove('error') : this.$refs.email.classList.add('error');
            },
            checkPhone() {
                this.validatePhone(this.phone) ? this.$refs.phone.classList.remove('error') : this.$refs.phone.classList.add('error');
            },
            nameFofus() {
                if(this.check==1)
                this.checkName();
            },
            emailFofus() {
                if(this.check==1)
                this.checkEmail();
            },
            phoneFofus() {
                if(this.check==1)
                this.checkPhone();
            },
            nextStep() {
                if (this.name.length > 2 && this.validateEmail(this.email) && this.validatePhone(this.phone)) {             
                    this.$store.commit('setPersonalInfo', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone
                    })
                    this.$store.commit('activeStepPlus');
                } else {
                    this.checkName();
                    this.checkEmail();
                    this.checkPhone();
                    this.check = 1;
                }
            }
        },
        computed: {
            ...mapGetters(['personalInfo'])
        },
        mounted() {
            this.name = this.personalInfo.name;
            this.email = this.personalInfo.email;
            this.phone = this.personalInfo.phone;
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/styles/_variables.scss";

    .error-text {
        margin-left: auto;
        color: $strawberry-red;
        font-size: 14px;
        font-weight: $bold;
        letter-spacing: 0.01em;
        opacity: 0;
        transition: .2s;
    }

    .error {

        .error-text {
            opacity: 1;
        }

        input {
            border-color: $strawberry-red !important;
        }
    }

    header {

    }

    .form {
        // display: ;
    }

    label {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 22px;
        color: $marine-blue;
        font-size: 14px;
        font-weight: $medium;

        input {
            outline: 0;
            height: 48px;
            width: 100%;
            margin-top: 8px;
            border: 1px solid $light-gray;
            border-radius: 8px;
            padding: 0 15px 4px;

            font-size: 17px;
            color: $marine-blue;
            font-weight: $medium;
            letter-spacing: -0.03em;
            font-family: $font-family;
            transition: .2s;

            &::placeholder {
                color: $color-gray;
                opacity: 1;
            }

            &:-ms-input-placeholder {
                color: $color-gray;
            }

            &::-ms-input-placeholder {
                color: $color-gray;
            }

            &:focus {
                border-color: $marine-blue;
            }
        }
    }

    footer {
        display: flex;
        margin-top: auto;
    }

    button {
        margin-left: auto;
    }

    @media(max-width: 991px) {
        .error-text {
            font-size: 10px;
            height: 0;
            overflow: hidden;
        }
        label {
            font-size: 12px;
            margin-bottom: 13px;
            input {
                height: 40px;
                margin-top: 6px;
                font-size: 16px;
            }
        }
        .error {
            .error-text {
                height: auto;
            }
        }
    }
</style>