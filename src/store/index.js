import { createStore } from 'vuex';

const store = createStore({
    state: {
        stepsNav: [
            {
                id: 1,
                title: 'Your info'
            },
            {
                id: 2,
                title: 'Select plan'
            },
            {
                id: 3,
                title: 'Add-ons'
            },
            {
                id: 4,
                title: 'Summary'
            }
        ],
        activeStep: 1,
        personalInfo: {
            name: '',
            email: '',
            phone: '',
        }
    },
    getters: {
        stepsNav (state) {
            return state.stepsNav
        },
        activeStep (state) {
            return state.activeStep
        },
        personalInfo (state) {
            return state.personalInfo
        }
    },
    mutations: {
        activeStepPlus(state) {
            if(state.activeStep < 4) {
                state.activeStep ++;
            }
        },
        activeStepMinus(state) {
            if(state.activeStep > 1) {
                state.activeStep --;
            }
        },
        setPersonalInfo (state, payload) {
            state.personalInfo = payload
        }
    }
})

export default store;