import {InputCheckboxSurveyStatus} from "../input";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {completeStep, nextStep} from "../../store/userStore";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect} from "react";
import {setQuestion} from "../../store/questionStore";
import {getFullName, questionsHealth} from '../../Helper/helper'


const schemaGenerator = (gender = 'Чоловік') => {

    if (gender == 'Чоловік'){
        return  {
            quest1 : yup.string().required("Виберіть відповідь"),
            quest2 : yup.string().required("Виберіть відповідь"),
            quest3 : yup.string().required("Виберіть відповідь"),
            quest4 : yup.string().required("Виберіть відповідь"),
            quest5 : yup.string().required("Виберіть відповідь"),
            quest6 : yup.string().required("Виберіть відповідь"),
            quest7 : yup.string().required("Виберіть відповідь"),
            quest8 : yup.string().required("Виберіть відповідь"),
            quest9 : yup.string().required("Виберіть відповідь"),
            quest10 : yup.string().required("Виберіть відповідь"),
            quest11 : yup.string().required("Виберіть відповідь"),
            quest12 : yup.string().required("Виберіть відповідь"),
            quest13 : yup.string().required("Виберіть відповідь"),
            quest14 : yup.string().required("Виберіть відповідь"),
            quest15 : yup.string().required("Виберіть відповідь"),
            quest16 : yup.string().required("Виберіть відповідь"),
            quest17 : yup.string().required("Виберіть відповідь"),
            quest18 : yup.string().required("Виберіть відповідь"),
            quest19 : yup.string().required("Виберіть відповідь"),
            quest23 : yup.string().required("Виберіть відповідь"),
            quest24 : yup.string().required("Виберіть відповідь"),
            quest25 : yup.string().required("Виберіть відповідь"),
            quest26 : yup.string().required("Виберіть відповідь"),
            quest27 : yup.string().required("Виберіть відповідь"),
        }
    } else {
        return  {
            quest1 : yup.string().required("Виберіть відповідь"),
            quest2 : yup.string().required("Виберіть відповідь"),
            quest3 : yup.string().required("Виберіть відповідь"),
            quest4 : yup.string().required("Виберіть відповідь"),
            quest5 : yup.string().required("Виберіть відповідь"),
            quest6 : yup.string().required("Виберіть відповідь"),
            quest7 : yup.string().required("Виберіть відповідь"),
            quest8 : yup.string().required("Виберіть відповідь"),
            quest9 : yup.string().required("Виберіть відповідь"),
            quest10 : yup.string().required("Виберіть відповідь"),
            quest11 : yup.string().required("Виберіть відповідь"),
            quest12 : yup.string().required("Виберіть відповідь"),
            quest13 : yup.string().required("Виберіть відповідь"),
            quest14 : yup.string().required("Виберіть відповідь"),
            quest15 : yup.string().required("Виберіть відповідь"),
            quest16 : yup.string().required("Виберіть відповідь"),
            quest17 : yup.string().required("Виберіть відповідь"),
            quest18 : yup.string().required("Виберіть відповідь"),
            quest19 : yup.string().required("Виберіть відповідь"),
            quest20 : yup.string().required("Виберіть відповідь"),
            quest21 : yup.string().required("Виберіть відповідь"),
            'quest22-value' : yup.string().required("Виберіть відповідь"),
            quest23 : yup.string().required("Виберіть відповідь"),
            quest24 : yup.string().required("Виберіть відповідь"),
            quest25 : yup.string().required("Виберіть відповідь"),
            quest26 : yup.string().required("Виберіть відповідь"),
            quest27 : yup.string().required("Виберіть відповідь"),
        }
    }

}

export function FormHealthStatus(){

    const {user, steps} = useSelector(state => state.user)
    const schema = yup.object(schemaGenerator(user.gender)).required();
    const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { question } = useSelector(state => state.question)

    useEffect(()=> {
        if (question) {
            reset(question)
        }
    },[navigate,user])

    const onSubmit = data =>
    {
        let filterData = {}

        for (const [key, val] of Object.entries(data)) {
            if(val){
                filterData[key] = val
            }
        }

        console.log(filterData)

        if(Object.entries(errors).length == 0 && !steps.s_3){
            dispatch(completeStep('3'))
            dispatch(nextStep())
        }
        if (Object.entries(errors).length == 0){
            dispatch(setQuestion(filterData))
            navigate('/reg/4')
        }
    };


    return(
        <div className="nk-block nk-block-lg">
            <div className="nk-block-head">
                <div className="nk-block-head-content">
                    <h4 className="title nk-block-title">Анкета про стан здоров’я</h4>
                    <div className="nk-block-des">
                        <p>Шановн{user.gender === 'Жінка' ? 'а': 'ий'} {getFullName(user)} !</p>

                        <p>Існує ряд захворювань та особливих станів організму, що можуть впливати на хід Вашого лікування.
                            Тому просимо достовірно та уважно  заповнити цю анкету.
                            Якщо Вам щось незрозуміло або Ви не знаєте як відповісти - запитайте у лікаря.
                            Зазначені дані необхідні для контролю за станом Вашого здоров'я під час лікування,є лікарською таємницею та не підлягають розголошенню.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card card-bordered card-preview">
                <div className="card-inner">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="preview-block"><span className="preview-title-lg overline-title">Будь ласка, вкажіть інформацію щодо наявності певних проблем із здоров'ям:</span>
                            <div className="row gy-4">
                                {
                                    questionsHealth.block1.filter((e)=>{
                                        if (e.forWoman && user.gender !== "Жінка"){
                                            return false
                                        }
                                        return true
                                    }).map((e)=>{
                                        return <InputCheckboxSurveyStatus name={e.id} register={register} title={e.title} size={4} inputFieldStatus={e.input} inputFieldPlaceholder={e.placeholder || ''} onlyInput={e.onlyInput} key={e.id} required={true} val={question ? question[e.id] : ''} err={errors} setValue={setValue}/>
                                    })
                                }
                            </div>
                        </div>

                        <hr className="preview-hr" />

                        <div className="preview-block">
                            <div className="row gy-4">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-lg btn-primary">Наступний Крок</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}