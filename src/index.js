import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Stage2 from "./Pages/Registration/Stage2";
import StageOutlet from "./Components/Outlet/StageOutlet";


import { redirect } from "react-router-dom";

import Stage3 from "./Pages/Registration/Stage3";
import Stage1 from "./Pages/Registration/Stage1";
import Stage4 from "./Pages/Registration/Stage4";
import UserProfile from "./Pages/UserProfile";
import PageOutlet from "./Components/Outlet/PageOutlet";
import AgreementPage from "./Pages/DocumentPages/AgreementPage";
import AgreementPrintPage from "./Pages/DocumentPages/AgreementPrintPage";
import PrintOutlet from "./Components/Outlet/PrintOutlet";
import Stage5 from "./Pages/Registration/Stage5";
import SurveyDocumentPage from "./Pages/DocumentPages/SurveyDocumentPage";
import HealthStatusPage from "./Pages/DocumentPages/HealthStatusPage";


const checkAccessRoute = (id) =>{
    if (sessionStorage.getItem('actual_step') && sessionStorage.getItem('actual_step') < id){
        return redirect(`/reg/${sessionStorage.getItem('actual_step')}`)
    }
    return null
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                element: <StageOutlet />,
                children: [
                    {
                        path: 'reg/1',
                        element: <Stage1 title='Інформована згода' />,
                    },

                    {
                        path: 'reg/2',
                        element: <Stage2 title='Загальна інформація' />,
                        loader: () => checkAccessRoute(2)

                    },
                    {
                        path: 'reg/3',
                        element: <Stage3 title='Анкета про стан здоров’я' />,
                        loader: () => checkAccessRoute(3)

                    },
                    {
                        path: 'reg/4',
                        element: <Stage4 title='Aнкета опитувальник для пацієнта' />,
                        loader: () => checkAccessRoute(4)

                    },
                    {
                        path: 'reg/5',
                        element: <Stage5 title='Підтвердження анкети' />,
                        loader: () => checkAccessRoute(5)

                    },
                    {
                        path: 'reg',
                        loader: () => {
                            if (sessionStorage.getItem('actual_step')){
                                return redirect(`/reg/${sessionStorage.getItem('actual_step')}`)
                            }

                            return redirect(`/reg/1`)
                        }
                    },
                    {
                        path: 'reg/*',
                        loader: () => {
                            if (sessionStorage.getItem('actual_step')){
                                return redirect(`/reg/${sessionStorage.getItem('actual_step')}`)
                            }

                            return redirect(`/reg/1`)
                        }
                    }
                ]
            },

            {
                path: "user",
                element: <PageOutlet />,

                children: [
                    {
                        path: ":idUser",
                        element: <UserProfile />,
                    }
                ]
            },

        ]
    },

    {
        path: "/agreement",
        element: <PrintOutlet />,
        loader: () => {
            document.title = 'Інформована згода на попередній огляд та консультацію | Frankolab'
            return null
        },

        children: [

            {
                path: "",
                element: <AgreementPage />,
            },

            {
                path: "print",
                element: <AgreementPrintPage />,
            }
        ]

    },

    {
        path: "/survey",
        element: <PrintOutlet />,
        loader: () => {
            document.title = 'Aнкета опитувальник для пацієнта | Frankolab'
            return null
        },

        children: [

            {
                path: "",
                element: <SurveyDocumentPage />,
            },

            {
                path: "print",
                element: <AgreementPrintPage />,
            }
        ]
    },

    {
        path: "/health",
        element: <PrintOutlet />,

        loader: () => {
            document.title = 'Анкета про стан здоров’я | Frankolab'
            return null
        },

        children: [

            {
                path: "",
                element: <HealthStatusPage />,
            },

            {
                path: "print",
                element: <AgreementPrintPage />,
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
