import {Outlet, Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {configActualStep, configUserFromStorage} from "./store/userStore";

import './Assets/css/dashlite.css'
import './Assets/css/theme.css'
import './Assets/css/libs/themify-icons.css'
import './Assets/css/libs/bootstrap-icons.css'
import './Assets/css/libs/fontawesome-icons.css'
import {configSurveysFromStorage} from "./store/surveyStore";
import {configQuestionFromStorage} from "./store/questionStore";
import Header from "./Components/Header";
import {BurgerMenu} from "./Components/BurgerMenu";


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user)
  const { survey } = useSelector(state => state.survey)
  const { question } = useSelector(state => state.question)

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

  useEffect(()=>{

      if(sessionStorage.getItem('actual_step')){
        dispatch(configActualStep())
      } else {
        sessionStorage.setItem('actual_step', 1);
        navigate('/reg/1')
      }
  },[sessionStorage.getItem('actual_step')])

  return (
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap ">
            <Header />


            <div className="nk-content ">
              <div className="container wide-xl">
                <div className="nk-content-inner">
                  <BurgerMenu />

                  <div className="nk-content-body">
                    <div className="nk-content-wrap">
                      <Outlet />
                    </div>

                    <div className="nk-footer">
                      <div className="container wide-xl">
                        <div className="nk-footer-wrap g-2">
                          <div className="nk-footer-copyright"> © 2023</div>
                          <div className="nk-footer-links">
                            <ul className="nav nav-sm">
                              <li className="nav-item dropup">
                                <a href="#"
                                   className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                                   data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                  <ul className="language-list">
                                    <li>
                                      <a href="#" className="language-item">
                                        <span className="language-name">English</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="language-item">
                                        <span className="language-name">Español</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="language-item">
                                        <span className="language-name">Français</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="language-item">
                                        <span className="language-name">Türkçe</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item">
                                <a data-bs-toggle="modal" href="#region" className="nav-link"><em
                                    className="icon ni ni-globe"></em><span className="ms-1">Select Region</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

  );
}

export default App;
