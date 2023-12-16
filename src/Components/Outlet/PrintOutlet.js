import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {configUserFromStorage} from "../../store/userStore";
import {useEffect} from "react";
import {configSurveysFromStorage} from "../../store/surveyStore";
import {configQuestionFromStorage} from "../../store/questionStore";


function PageOutlet() {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)
    const {survey} = useSelector(state => state.survey)
    const {question} = useSelector(state => state.question)

    useEffect(()=>{

        if (!survey && sessionStorage.getItem('survey')){
            dispatch(configSurveysFromStorage())
        }

    },[survey])

    useEffect(()=>{

        if (user.firstname === '' && sessionStorage.getItem('user')){
            dispatch(configUserFromStorage())
        }

    },[user])

    useEffect(()=>{

        if (!question && sessionStorage.getItem('question')){
            dispatch(configQuestionFromStorage())
        }

    },[question])


    return (
        <div className='print-wrapper'>
            <div className="nk-block-between g-3 pt-5">
                <div className="nk-block-head-content">
                    <div onClick={()=>window.history.back()} className="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em
                    className="icon ni ni-arrow-left"></em><span>Повернутись назад</span></div>
                    <div onClick={()=>window.history.back()} className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none">
                        <em className="icon ni ni-arrow-left"></em>
                    </div>
                </div>

                <div className="nk-block-head-content">
                    <div onClick={()=>window.print()} className="btn btn-outline-light bg-white d-none d-sm-inline-flex">
                        <em className="icon ni ni-printer-fill"></em>
                        <span>Друк/Зберегти</span>
                    </div>
                    <div onClick={()=>window.print()} className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none">
                        <em className="icon ni ni-printer-fill"></em>
                    </div>
                </div>

            </div>
            <div className="agree-document">
                <Outlet />
            </div>
        </div>
    );
}

export default PageOutlet;

