import {InputCheckboxSurveyStatus} from "../input";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {completeStep, nextStep} from "../../store/userStore";
import {useNavigate} from "react-router-dom";
import {setSurveys} from "../../store/surveyStore";
import {useEffect} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {getFullName, questionsSurvey} from "../../Helper/helper";


const schemaGenerator = () => {
    let res = {}
    for (let i = 1; i < 33; i++) {
        res[`surv${i}`] = yup.string().required("Виберіть відповідь")
    }

    return res
}
const schema = yup.object(schemaGenerator()).required();

export function FormSurvey(){
    const { register, handleSubmit, setValue, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const {user, steps} = useSelector(state => state.user)
    const { survey } = useSelector(state => state.survey)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSubmit = data =>
    {

        let filterData = {}

        for (const [key, val] of Object.entries(data)) {
            if(val){
                filterData[key] = val
            }
        }


        if(Object.entries(errors).length === 0 && !steps.s_4){
            dispatch(completeStep('4'))
            dispatch(nextStep())
        }
        if (Object.entries(errors).length === 0){
            dispatch(setSurveys(filterData))
            navigate('/reg/5')
        }
    };

    useEffect(()=> {
        reset(survey)
    },[survey])


    return(
        <div className="nk-block nk-block-lg">
            <div className="nk-block-head">
                <div className="nk-block-head-content">
                    <h4 className="title nk-block-title">Анкета про стан здоров’я</h4>
                    <div className="nk-block-des">
                        <p>Шановн{user.gender === 'Жінка' ? 'а': 'ий'} {getFullName(user)} !</p>

                        <p>Будь ласка, заповніть форму нижче, де ви можете вказати основні симптоми, їх характер та тривалість. Також, будь ласка, подайте будь-яку іншу інформацію, яка, на вашу думку, може бути важливою – це може включати фактори, що спричинили або погіршили ваше захворювання, інші супутні симптоми, або зміни у вашому стилі життя.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card card-bordered card-preview">
                <div className="card-inner">

                    <form className="form-validate" onSubmit={handleSubmit(onSubmit)}>

                        <div className="preview-block">
                            <span className="preview-title-lg overline-title">Пройдіть опитування, де ви можете розповісти про всі свої скарги:</span>
                            <div className="row gy-4">
                                {
                                    questionsSurvey.block_1.map((e)=>{
                                        return <InputCheckboxSurveyStatus key={e.id} name={e.id} register={register} title={e.title} size={4} inputFieldStatus={e.input} inputFieldPlaceholder={e.placeholder || ''} onlyInput={e.onlyInput} key={e.id} required={true} val={survey ? survey[e.id] : '' } err={errors} setValue={setValue}/>
                                    })
                                }
                            </div>
                        </div>

                        <hr className="preview-hr" />

                        <div className="preview-block"><span className="preview-title-lg overline-title">Скарги, що були наведені вище, виникають після застосування:</span>
                            <div className="row gy-4">
                                {
                                    questionsSurvey.block_2.map((e)=>{
                                        return <InputCheckboxSurveyStatus key={e.id} name={e.id} register={register} title={e.title} size={4} inputFieldStatus={e.input} inputFieldPlaceholder={e.placeholder || ''} onlyInput={e.onlyInput} key={e.id} required={true} val={survey ? survey[e.id] : ''} err={errors} setValue={setValue}/>
                                    })
                                }
                            </div>
                        </div>

                        <hr className="preview-hr" />

                        <div className="preview-block"><span className="preview-title-lg overline-title">У Вас раніше були виявлені:</span>
                            <div className="row gy-4">
                                {
                                    questionsSurvey.block_3.map((e)=>{
                                        return <InputCheckboxSurveyStatus key={e.id} name={e.id} register={register} title={e.title} size={4} inputFieldStatus={e.input} inputFieldPlaceholder={e.placeholder || ''} onlyInput={e.onlyInput} key={e.id} required={true} val={survey ? survey[e.id] : ''} err={errors} setValue={setValue}/>
                                    })
                                }
                            </div>
                        </div>

                        <hr className="preview-hr" />

                        <div className="preview-block"><span className="preview-title-lg overline-title">Додаткові запитання:</span>
                            <div className="row gy-4">
                                {
                                    questionsSurvey.block_4.map((e)=>{
                                        return <InputCheckboxSurveyStatus key={e.id} name={e.id} register={register} title={e.title} size={12} inputFieldStatus={e.input} inputFieldPlaceholder={e.placeholder || ''} onlyInput={e.onlyInput} key={e.id} required={true} val={survey ? survey[e.id] : ''} err={errors} setValue={setValue}/>
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


