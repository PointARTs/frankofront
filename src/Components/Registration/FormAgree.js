import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

import {completeStep, changeConfirm, nextStep} from "../../store/userStore";
import {useEffect, useState} from "react";



export function FormAgree(){
    const dispatch = useDispatch()
    const {confirmAgree, steps} = useSelector(state => state.user)
    const [buttonNext, setButtonNext] = useState(false)
    const navigate = useNavigate()

    const nextStepHandler = () => {

        if (buttonNext && !steps.s_1){
            dispatch(completeStep('1'))
            dispatch(nextStep())
        }

        if (buttonNext){
            navigate('/reg/2')
        }

    }

    useEffect(()=>{
        let status = 0
        for (const [_, val] of Object.entries(confirmAgree)){
             !val && status++
        }

        if (status > 0){
            setButtonNext(false)
        } else
        {
            setButtonNext(true)
        }

    },[confirmAgree])

    return(
        <div className="nk-block nk-block-lg">
            <div className="nk-block-head">
                <div className="nk-block-head-content">
                    <h4 className="title nk-block-title">Інформована згода на попередній огляд та консультацію</h4>
                    <div className="nk-block-des">
                        <p>Заповніть форму згоди, яка надається нижче, та гарантуйте собі безпечне та ефективне лікування у стоматологічній клініці "Frankolab clinic".</p>
                    </div>
                </div>
            </div>
            <div className="card card-bordered card-preview">
                <div className="card-inner">
                        <div className="preview-block"><span className="preview-title">Я добровільно звертаюся за медичною допомогою у стоматологічну клініку «Frankolab clinic» та надаю повну відому мені інформацію про стан мого здоров'я. </span>
                            <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch1" checked={confirmAgree.confirm1} onChange={()=>dispatch(changeConfirm(1))} disabled={steps.s_1} required={true}/><label className="custom-control-label" htmlFor="customSwitch1" >Підтверджую</label></div>
                        </div>
                        <hr className="preview-hr" />

                        <div className="preview-block"><span className="preview-title">Я погоджуюся на проведення огляду порожнини рота, маніпуляцій та досліджень (включаючи рентгенологічні) для отримання максимально повної картини стану моєї зубощелепної системи в цілому і окремих зубів зокрема.</span>
                            <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch2" checked={confirmAgree.confirm2} onChange={()=>dispatch(changeConfirm(2))} disabled={steps.s_1} required={true}/><label className="custom-control-label" htmlFor="customSwitch2" >Підтверджую</label></div>
                        </div>
                        <hr className="preview-hr" />
                        <div className="preview-block"><span className="preview-title">Я згоден (на) на складання попереднього плану лікування. З прейскурантом ознайомлений(на).</span>
                            <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch3" checked={confirmAgree.confirm3} onChange={()=>dispatch(changeConfirm(3))} disabled={steps.s_1} required={true}/><label className="custom-control-label" htmlFor="customSwitch3" >Підтверджую</label></div>
                        </div>
                        <hr className="preview-hr" />
                        <div className="preview-block"><span className="preview-title">Я даю згоду на обробку та внесення до локальної інформаційної системи моїх персональних даних, у т.ч. щодо стану здоров’я, діагнозів, призначеного лікування, його перебігу.</span>
                            <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch4" checked={confirmAgree.confirm4} onChange={()=>dispatch(changeConfirm(4))} disabled={steps.s_1} required={true}/><label className="custom-control-label" htmlFor="customSwitch4" >Підтверджую</label></div>
                        </div>

                        <hr className="preview-hr" />

                        <div className="preview-block">
                            <div className="row gy-4">
                                <div className="form-group">
                                    <div className="btn btn-lg btn-primary" onClick={nextStepHandler}>Наступний Крок</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>

    )
}