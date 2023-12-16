import {Input, InputCheckbox, InputDataPicker, InputMaskPhone} from "../input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {addUser, completeStep, nextStep, setStep, uncompleteStep} from "../../store/userStore";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {clearQuestion} from "../../store/questionStore";


const schema = yup.object({
    gender: yup.string().required("Виберіть стать"),
    firstname: yup.string().required("Поле не може бути пустим"),
    lastname: yup.string().required("Поле не може бути пустим"),
    thirdname: yup.string().required("Поле не може бути пустим"),
    birthday: yup.string().required("Поле не може бути пустим"),
    address: yup.string().required("Поле не може бути пустим"),
    phone: yup.string().matches('\\+(\\d{2})\\((\\d{3})\\)\\s(\\d{4}\\s\\d{3})', 'Введіть коректний номер').required("Поле не може бути пустим"),
    email: yup.string().email("Не коректно введений email").required("Поле не може бути пустим"),
}).required();


export function FormUser(){
    const { register, handleSubmit, control, setValue, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user)
    const steps = useSelector(state => state.user.steps)

    const onSubmit = data =>
    {
        if (user.gender !== data.gender){
            dispatch(clearQuestion())
            dispatch(completeStep('2'))
            dispatch(setStep(3))
            dispatch(uncompleteStep('3'))
        }

        console.log(user.gender, ' - ', data.gender)

        if(Object.entries(errors).length === 0 && !steps.s_2){
            console.log(errors)
            dispatch(completeStep('2'))
            dispatch(nextStep())
        }
        if (Object.entries(errors).length === 0){
            dispatch(addUser(data));
            navigate('/reg/3')
        }

    };

    useEffect(()=>{

        if (user.firstname){
            for (const [key, value] of Object.entries(user)) {
                if (key === 'birthday'){
                    setValue(key, new Date(value))
                } else {
                    setValue(key, value)
                }
            }
        }
    },[user])



    return(
        <div className="nk-block nk-block-lg">
            <div className="nk-block-head">
                <div className="nk-block-head-content">
                    <h4 className="title nk-block-title">Заповніть форму</h4>
                    <div className="nk-block-des">
                        <p>Ми прагнемо забезпечити вам не лише якісне, а й індивідуальне лікування для досягнення оптимального стану вашого усного здоров'я. Ми розуміємо, що ваш час цінний, і саме тому пропонуємо можливість запису на попередній огляд та консультацію, щоб зробити ваш візит до нас максимально зручним та ефективним.</p>
                    </div>
                </div>
            </div>
            <div className="card card-bordered card-preview">
                <div className="card-inner">
                    <form className="form-validate" onSubmit={handleSubmit(onSubmit)}>

                    <div className="preview-block">
                        <span className="preview-title-lg overline-title">Загальна інформація</span>
                        <div className="row gy-4">

                            <InputCheckbox size={12} title={'Стать'} name={'gender'} data={[{id:'man', title: 'Чоловік'}, {id:'woman', title: 'Жінка'}]} register={register} value={user.gender} err={errors}/>
                            <Input size={4} title="Фамілія" placeholder="Введіть свою фамілію" icon="ni-user" name="firstname" autocomplete={'firstName'} register={register} required={true} value={user.firstname} err={errors}/>
                            <Input size={4} title="Ім'я" placeholder="Введіть своє ім'я" icon="ni-user" name="lastname" autocomplete={'lastName'} register={register} required={true} value={user.lastname} err={errors}/>
                            <Input size={4} title="По-батькові" placeholder="Введіть своє ім'я по-батькові" icon="ni-user" name="thirdname" register={register} required={true} value={user.thirdname} err={errors}/>
                            <InputDataPicker size={4} title='Дата народження' icon="ni-calendar" name="birthday" control={control} err={errors} required/>
                            <Input size={8} title="Адрес проживання" icon="ni-location" placeholder="Введіть свою актуальну адрусу проживання" name="address" register={register} required={true} value={user.address} err={errors}/>
                        </div>
                    </div>

                    <hr className="preview-hr" />

                    <div className="preview-block"><span className="preview-title-lg overline-title">Контактна інформація</span>
                        <div className="row gy-4">
                            <InputMaskPhone name={'phone'} title={'Телефон'} icon="ni-mobile" size={4} control={control} err={errors}/>
                            <Input size={4} title="Email" placeholder="Введіть свій email" icon="ni-mail" name="email" autocomplete={'email'} register={register} value={user.email} err={errors}/>

                            <div className="alert alert-light alert-icon mt-5 mx-2">
                                <em className="icon ni ni-info"></em> Уважно заповняйте форму <strong>already expired</strong>.
                            </div>

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