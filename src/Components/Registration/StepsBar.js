import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import {configCompleteStep, firstStepTrue} from "../../store/userStore";

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


                                                <li className="nk-menu-item">
                                                    <Link to="/reg/1" className={steps.s_1 ? "nk-menu-link text-success" : 'nk-menu-link'}>
                                                        <span className="nk-menu-icon">
                                                          <em className={steps.s_1 ? "icon ni ni-check-fill-c text-success" : 'icon ni ni-check-c'}></em>
                                                        </span>
                                                        <span className="nk-menu-text">Інформована згода</span>
                                                    </Link>
                                                </li>

                                                <li className="nk-menu-item">
                                                    <Link to="/reg/2" className={steps.s_2 ? "nk-menu-link text-success" : 'nk-menu-link'}>
                                                        <span className="nk-menu-icon">
                                                          <em className={steps.s_2 ? "icon ni ni-user-fill-c text-success" : 'icon ni ni-user-c'}></em>
                                                        </span>
                                                        <span className="nk-menu-text">Заповніть форму</span>
                                                    </Link>
                                                </li>

                                                <li className="nk-menu-item">
                                                    <Link to="/reg/3" className={steps.s_3 ? "nk-menu-link text-success" : 'nk-menu-link'}>
                                                        <span className="nk-menu-icon">
                                                          <em className={steps.s_3 ? "icon ni ni-heart-fill text-success" : 'icon ni ni-heart'}></em>
                                                        </span>
                                                        <span className="nk-menu-text">Анкета про стан здоров’я</span>
                                                    </Link>
                                                </li>

                                                <li className="nk-menu-item">
                                                    <Link to="/reg/4" className={steps.s_4 ? "nk-menu-link text-success" : 'nk-menu-link'}>
                                                        <span className="nk-menu-icon">
                                                          <em className={steps.s_4 ? "icon ni ni-list-thumb-fill text-success" : 'icon ni ni-list-thumb'}></em>
                                                        </span>
                                                        <span className="nk-menu-text">Анкета опитувальник</span>
                                                    </Link>
                                                </li>

                                                <li className="nk-menu-item">
                                                    <Link to="/reg/5" className="nk-menu-link">
                                                        <span className="nk-menu-icon">
                                                          <em className="icon ni ni-edit-alt"></em>
                                                        </span>
                                                        <span className="nk-menu-text">Підтвердження</span>
                                                    </Link>
                                                </li>



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
