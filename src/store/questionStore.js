import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        question : null,
        filterListQuestion : null
    },
    reducers: {

        clearQuestion(state){
            sessionStorage.removeItem('question')
            state.question = null
            state.filterListQuestion = null
        },

        setQuestion(state, action){
            if (typeof action.payload == 'object'){
                state.question = action.payload
                sessionStorage.removeItem('question')
                sessionStorage.setItem('question', JSON.stringify(state.question))
            }
        },

        configQuestionFromStorage(state){
            if (sessionStorage.getItem("question")){
                const question = sessionStorage.getItem("question")
                state.question = JSON.parse(question)
            }
        },

        configQuestionAnswer(state){
            let arr = []
            state.filterListQuestion = []

            if (state.question){
                for (const [key, value] of Object.entries(state.question)) {
                    if (!key.includes('-')){
                        arr.push({
                            id: key,
                            value
                        })
                    } else {
                        const num = key.replace('quest','').replace('-value', '')-1
                        let con = arr[num]
                        arr[num] = {...con, id: key.replace('-value', ''), text: value}
                    }
                }
                state.filterListQuestion = arr
            }

        }
    },
});

export const {setQuestion, configQuestionFromStorage, configQuestionAnswer, clearQuestion} = questionSlice.actions;

export default questionSlice.reducer;
