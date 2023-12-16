import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import {configCompleteStep, firstStepTrue} from "../../store/userStore";


const stepsMenu = [
    {
       title: 'Інформована згода',
        icon: 'ni-check-c',
        iconActive: 'ni-check-fill-c',
        link: '/reg/1',
        stepName : 's_1'
    },

    {
        title: 'Персональна інформація',
        icon: 'ni-user-c',
        iconActive: 'ni-user-fill-c',
        link: '/reg/2',
        stepName : 's_2'
    },

    {
        title: 'Анкета про стан здоров’я',
        icon: 'ni-heart',
        iconActive: 'ni-heart-fill',
        link: '/reg/3',
        stepName : 's_3'
    },

    {
        title: 'Анкета опитувальник',
        icon: 'ni-list-thumb',
        iconActive: 'ni-list-thumb-fill',
        link: '/reg/4',
        stepName : 's_4'
    },

    {
        title: 'Підтвердження',
        icon: 'ni-edit-alt',
        iconActive: 'ni-edit-alt-fill',
        link: '/reg/5',
    },

    ]

function StepsBar() {
    const steps = useSelector(state => state.user.steps)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (user.step > 1){
            dispatch(configCompleteStep())
            dispatch(firstStepTrue())
        }
    },[user.step])

    return (
                <div
                    className="nk-aside toggle-screen-lg"
                    data-content="sideNav"
                    data-toggle-overlay="true"
                    data-toggle-screen="lg"
                    data-toggle-body="true"
                >
                    <div className="nk-sidebar-menu" data-simplebar="init">
                        <div className="simplebar-wrapper" style={{ margin: "0px 0px -40px" }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                    <div
                                        className="simplebar-content-wrapper"
                                        tabIndex={0}
                                        role="region"
                                        aria-label="scrollable content"
                                        style={{ height: "auto", overflow: "hidden" }}
                                    >
                                        <div
                                            className="simplebar-content"
                                            style={{ padding: "0px 0px 40px" }}
                                        >
                                            <ul className="nk-menu">
                                                <li className="nk-menu-heading">
                                                    <h6 className="overline-title">Кроки</h6>
                                                </li>

                                                {
                                                    stepsMenu.map((e, key)=>{
                                                        return <li className="nk-menu-item" key={key}>
                                                            <Link to={e.link} className={steps[e.stepName] ? "nk-menu-link text-success" : 'nk-menu-link'}>
                                                                <span className="nk-menu-icon">
                                                                  <em className={steps[e.stepName] ? `icon ni ${e.iconActive} text-success` : `icon ni ${e.icon}`}></em>
                                                                </span>
                                                                <span className="nk-menu-text">{e.title}</span>
                                                                {user.step === key+1 && <span className="nk-menu-text">•</span>}
                                                            </Link>
                                                        </li>
                                                    })
                                                }




                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="simplebar-placeholder"
                                style={{ width: "auto", height: 353 }}
                            />
                        </div>
                    </div>

                </div>

    );
}

export default StepsBar;
