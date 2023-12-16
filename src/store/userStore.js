import { createSlice } from '@reduxjs/toolkit';

function setData(state, action){
    let data = action.payload

    if (typeof action.payload == 'string')
    {
        data = JSON.parse(action.payload)
    }

    state.user.firstname = data.firstname
    state.user.lastname = data.lastname
    state.user.thirdname = data.thirdname
    state.user.address = data.address
    state.user.birthday = data.birthday
    state.user.gender = data.gender
    state.user.phone =data.phone
    state.user.email = data.email
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        step : 1,
        steps: {
          s_1: false,
          s_2: false,
          s_3: false,
          s_4: false,
        },

        confirmAgree: {
            confirm1: true,
            confirm2 : true,
            confirm3 : true,
            confirm4 : true
        },

        user : {
            firstname: '',
            lastname: '',
            thirdname: '',
            address: '',
            birthday: '',
            gender: '',
            phone: '',
            email: ''
        }
    },
    reducers: {
        firstStepTrue(state){
            if (state.step > 1){
            for (const [key] of Object.entries(state.confirmAgree)) {
                state.confirmAgree[key] = true
            }
            }
        },

        preStep(state){
            if (state.step > 1){
                state.step -= 1;
            }
        },

        setStep(state,action){
            const st = typeof action.payload == 'number' ? parseInt(action.payload) : state.step
            sessionStorage.setItem('actual_step', st)
            state.step = st
        },

        nextStep(state){
            if (state.step < 5){
                state.step += 1;
            }

            sessionStorage.removeItem('actual_step')
            sessionStorage.setItem('actual_step', state.step)
        },

        changeConfirm(state, action){
          state.confirmAgree[`confirm${action.payload}`] = !state.confirmAgree[`confirm${action.payload}`]
        },

        completeStep(state, action){
            state.steps[`s_${action.payload}`] = true
        },

        uncompleteStep(state, action){
            state.steps[`s_${action.payload}`] = false
        },

        addUser(state, action) {
            setData(state, action)
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },

        configCompleteStep(state){
            for (const [key] of Object.entries(state.steps)) {
                if (key.slice(-1) >= 1 & key.slice(-1) <= state.step-1){
                    state.steps[key] = true
                }
            }
        },

        configActualStep(state){
            const act_step = sessionStorage.getItem("actual_step")

            if (act_step && act_step >= 1 && act_step <= 5){
                state.step = parseInt(act_step)
            }
        },

        configUserFromStorage(state){
            if (sessionStorage.getItem("user")){
                const user = {payload : sessionStorage.getItem("user")}
                if (user){
                    setData(state, user)
                }
            }
        }
    },
});

export const {addUser, configUserFromStorage, preStep, nextStep, completeStep, changeConfirm, firstStepTrue, configActualStep, configCompleteStep, setStep, uncompleteStep} = userSlice.actions;

export default userSlice.reducer;