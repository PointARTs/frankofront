import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userStore'
import questionReducer from './questionStore'
import surveyReducer from './surveyStore'

export default configureStore({
    reducer: {
        survey : surveyReducer,
        question: questionReducer,
        user : userReducer
    },
});