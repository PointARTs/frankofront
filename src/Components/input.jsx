import {useEffect, useState} from "react";
import {Controller} from "react-hook-form";
import {PatternFormat} from "react-number-format";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";

export function Input ({name, icon, placeholder = '',size,title, type='text', autocomplete, register, required = false, value = '', err}){
    return (
        <div className={"col-sm-"+size}>
            <div className="form-group"><label className="form-label" htmlFor={name}>{title} {required ? '*' : ''}</label>
                <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                        <em className={"icon ni "+ icon}></em>
                    </div>
                    <input type={type} className="form-control" id={name} placeholder={placeholder}  autoComplete={autocomplete} {...register(name, {required: {required}})} defaultValue={value} />
                    {err && <span id="fv-full-name-error" className="invalid">{err[name]?.message}</span>}
                </div>
            </div>
        </div>
    )
}

export function InputDataPicker ({name, icon, size, title, control, required = false, err}){

    return (
        <div className={"col-sm-"+size}>
            <div className="form-group"><label className="form-label" htmlFor={name}>{title} {required ? '*' : ''}</label>
                <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                        <em className={"icon ni "+ icon}></em>
                    </div>
                    <Controller
                        name={name}
                        control={control}
                        rules={{
                            required: {required},
                        }}
                        render={({ field }) => (
                            <DatePicker wrapperClassName="form-control" className="form-control" onChange={field.onChange} selected={field.value} value={field.value} calendarClassName={"datepicker-days"} dateFormat={'dd.MM.yyyy'} placeholderText={'Введіть дату народження'} required={required}/>
                        )}
                    />

                    {err && <span id="fv-full-name-error" className="invalid">{err[name]?.message}</span>}
                </div>
            </div>
        </div>
    )
}

export function InputCheckbox ({name, size, title, data, register, required, err}){

        return (
            <div className={"col-sm-"+size}>
                <div className="form-group">
                    <label className="form-label">{title}</label>
                    <div className="form-control-wrap">
                        <ul className="custom-control-group">
                            {
                                data.map((e)=>{
                                    return(
                                        <li key={e.id}>
                                            <div className="custom-control custom-radio custom-control-pro no-control">
                                                <input type="radio" className="custom-control-input" name={name} id={e.id} value={e.title} {...register(name, {required: {required}})} />
                                                <label className="custom-control-label" htmlFor={e.id}>{e.title}</label>
                                                {err.gender && e.id === 'man' ? <span id='man' className="invalid">{err[name]?.message}</span> : ''}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
}
export function InputMaskPhone ({name, size, title, icon, control, err}){

    return (
        <div className={"col-sm-"+size}>
            <div className="form-group"><label className="form-label" htmlFor={name}>{title}</label>
                <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                        <em className={"icon ni "+ icon}></em>
                    </div>

                    <Controller
                        name={name}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <PatternFormat className="form-control" format="+38(0##) #### ###" allowEmptyFormatting mask="_" value={field.value} onChange={field.onChange}/>
                        )}
                    />
                    {err && <span id="fv-full-name-error" className="invalid">{err[name]?.message}</span>}
                </div>
            </div>
        </div>
    )
}
export function InputMaskCustom ({name, size, title, icon, control, mask, required}){

    return (
        <div className={"col-sm-"+size}>
            <div className="form-group"><label className="form-label" htmlFor={name}>{title}</label>
                <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                        <em className={"icon ni "+ icon}></em>
                    </div>

                    <Controller
                        name={name}
                        control={control}
                        rules={{
                            required: {required},
                        }}
                        render={({ field }) => (
                            <PatternFormat className="form-control" format={mask} allowEmptyFormatting mask="_" value={field.value} onChange={field.onChange}/>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}


export function InputCheckboxSurveyStatus ({name, size, title, register, buttons = [{id:'yes', title: 'Так'}, {id:'no', title: 'Ні'}], required, inputFieldStatus, inputFieldPlaceholder, onlyInput, val, err, setValue}){

    const [inputStatus, setInputStatus] = useState(false)
    const [access, setAccess] = useState(false)

    const titleToUpper = () =>{
        return title[0].toUpperCase() + title.slice(1)
    }

    useEffect(()=>{
        if (inputFieldStatus && val){
            if(val === 'Так') {
                setInputStatus(true)
            }
            else {
                setInputStatus(false)
            }
        }

    },[val])

    useEffect(()=>{
        inputFieldStatus & inputStatus ? setAccess(true) :  setAccess(false)

    },[inputStatus])


    return (
        <div className={"min-col-80 col-sm-6 col-md-"+size}>
            <div className="form-group">
                <label className="form-label">{titleToUpper()}</label>
                <div className="form-control-wrap">
                    {!onlyInput &&
                        <ul className="custom-control-group">
                        {
                            buttons.map((e)=>{
                                return <li key={e.id}>
                                    <div className="custom-control custom-radio custom-control-pro no-control">
                                        <input type="radio" className="custom-control-input" name={name} id={`${e.id}-${name}`} value={e.title} {...register(name, {required: {required}})} onClick={()=> {
                                            if (e.id === 'yes'){
                                                setInputStatus(true)
                                            } else
                                            {
                                                setInputStatus(false)
                                                inputFieldStatus && setValue(`${name}-value`, '')
                                            }
                                        }
                                        }/>
                                        <label className="custom-control-label" htmlFor={`${e.id}-${name}`}>{e.title}</label>
                                    </div>
                                </li>
                            })
                        }

                    </ul>


                    }
                    {onlyInput  ? <input type="text" className="form-control mt-3" id={name} placeholder={inputFieldPlaceholder} {...register(`${name}-value`, {required: {required}})} /> :
                        access  && <input type="text" className="form-control mt-3" id={name} placeholder={inputFieldPlaceholder} {...register(`${name}-value`, {required: {required}})}  />}
                </div>
                {err[name] && <span id={`yes-${name}-error`} className="invalid text-black-50">{err[name]?.message}</span>}
            </div>
        </div>
    )
}

