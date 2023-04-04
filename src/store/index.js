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
        },
        plan: {
            choice: 0, 
            items: [
                {
                    'img': '../images/icon-arcade.svg',
                    'title': 'Arcade',
                    'month': 9,
                    'year': 90,
                    'promotionYear': '2 months free',
                    'choice': 1
                },
                {
                    'img': '../images/icon-advanced.svg',
                    'title': 'Advanced',
                    'month': 12,
                    'year': 120,
                    'promotionYear': '2 months free',
                    'choice': 0
                },
                {
                    'img': '../images/icon-pro.svg',
                    'title': 'Pro',
                    'month': 15,
                    'year': 150,
                    'promotionYear': '2 months free',
                    'choice': 0
                },
            ]
        },
        accessories: [
            {
                'mainText': 'Online service',
                'subText': 'Access to multiplayer games',
                'month': 1,
                'year': 10,
                'choice': 0
            },
            {
                'mainText': 'Larger storage',
                'subText': 'Extra 1TB of cloud save',
                'month': 2,
                'year': 20,
                'choice': 0
            },
            {
                'mainText': 'Customizable profile',
                'subText': 'Custom theme on your profile',
                'month': 2,
                'year': 20,
                'choice': 0
            },
        ]
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
        },
        planInfo (state) {
            return state.plan
        },
        accessoriesInfo (state) {
            return state.accessories
        }
    },
    mutations: {
        activeStepPlus(state) {
            if(state.activeStep < 5) {
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
        },
        setPlan (state, payload) {
            state.plan.choice = payload.choice;
            state.plan.items.forEach((el, index) => {
                if(payload.choicePlan==el.title) {
                    el.choice = 1;
                } else {
                    el.choice = 0;
                }
            })
        },
        setStep (state) {
            state.activeStep = 2
        }
    }
})

export default store;