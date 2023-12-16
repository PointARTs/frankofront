import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
    name: 'survey',
    initialState: {
        survey : null
    },
    reducers: {
        setSurveys(state, action){
            if (typeof action.payload == 'object'){
                state.survey = action.payload
                sessionStorage.setItem('survey', JSON.stringify(state.survey))
            }
        },

        configSurveysFromStorage(state){
            if (sessionStorage.getItem("survey")){
                const survey = sessionStorage.getItem("survey")
                state.survey = JSON.parse(survey)
            }
        }
    },
});

export const {setSurveys, configSurveysFromStorage} = surveySlice.actions;

export default surveySlice.reducer;