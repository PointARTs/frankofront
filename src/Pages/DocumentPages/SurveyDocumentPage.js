import { useSelector} from 'react-redux';
import {getFullName, questionsSurvey} from "../../Helper/helper";

function SurveyDocumentPage() {
    const user = useSelector(state => state.user.user)
    const surveyAnswer = useSelector(state => state.survey.survey)

    const getDate = () => {
        const month = ['січня', 'лютого', "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
        return {day: new Date().getDate(), month: month[new Date().getMonth()] , year: new Date().getFullYear()}
    }

    const getBirthday = () =>{
        const date = new Date(user.birthday)
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    return (
        <>

            <div className="header-block">
                <div className="logo-2">
                    <img alt='logotype'
                        src="data:image/png;base64,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"/>
                </div>

                <div className="block-1">
                    <a>СТОМАТОЛОГІЧНИЙ КАБІНЕТ</a>
                    <a>ФОП Сабана Іллі Любомировича</a>
                </div>
                <div className="block-2">Медична карта № _________</div>
            </div>


            <h1 className="title_name">АНКЕТА-ОПИТУВАЛЬНИК ДЛЯ ПАЦІЄНТА</h1>
            <div>
                <a className="date">«<span className='date-line fw-medium'>{getDate().day}</span>»<span className='date-line'>{getDate().month}</span> {getDate().year} р.</a>
            </div>
            <div className="data-user">
                <a>Прізвище, ім’я, по батькові:<br/>{getFullName(user)}</a>
                <a>Дата народження: {getBirthday()}</a>
                <a>Cтать: {user.gender}</a>
            </div>


            <div className="box-table-doc">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Скаржетесь на</th>
                        <th scope="col">#</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            questionsSurvey.block_1.slice(0, questionsSurvey.block_1.length / 2).map((e)=>{
                                return <tr><td>{e.title}</td><th scope="row">{surveyAnswer && surveyAnswer[e.id]}</th></tr>
                            })
                        }
                    </tbody>
                </table>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Скаржетесь на</th>
                        <th scope="col">#</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            questionsSurvey.block_1.slice(questionsSurvey.block_1.length / 2).map((e)=>{
                                return <tr><td>{e.title}</td><th scope="row">{surveyAnswer && surveyAnswer[e.id]}</th></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="box-table-doc">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Виникають після застосування:</th>
                        <th scope="col">#</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        questionsSurvey.block_2.map((e)=>{
                            return <tr><td>{e.title}</td><th scope="row">{surveyAnswer && surveyAnswer[e.id]}</th></tr>
                        })
                    }
                    </tbody>
                </table>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">У Вас раніше були виявлені</th>
                        <th scope="col">#</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        questionsSurvey.block_3.map((e)=>{
                            return <tr><td>{e.title}</td><th scope="row">{surveyAnswer && surveyAnswer[e.id]}</th></tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            { surveyAnswer ? surveyAnswer['surv27-value'] &&
            <div className="input-block ">
                <a className="input-title-doc">Симптоми, на які ви скаржитеся, виникають через вказані речовини:</a>
                <a className="input-value-doc">{surveyAnswer && surveyAnswer['surv27-value']}</a>
            </div> : ''
            }

            <div className="input-block margin">
                <a className="input-title-doc">Які є у пацієнта інші хронічні захворювання (особливо автоімунні, хвороби
                    нирок, печінки і жовчного міхура, шлунку і кишківника, підшлункової залози, щитовидної залози):</a>
                <a className="input-value-doc">{surveyAnswer && surveyAnswer['surv33-value'] && surveyAnswer['surv33-value']}</a>
            </div>

            <div className="input-block margin">
                <a className="input-title-doc">Чи існують харчові продукти, харчові домішки, які не переносить
                    пацієнт:</a>
                <a className="input-value-doc">{surveyAnswer && surveyAnswer['surv34-value'] && surveyAnswer['surv34-value']}</a>
            </div>

            <div className="signature-user pt-3">
                <div className="signature-user-2">
                    <a className="data">Пацієнт</a>
                    <div className="sign">
                        <div className="sign-block">
                            <a className="sign-value sign-value-1"></a>
                            <div className="sign-desc">підпис</div>
                        </div>
                    </div>
                </div>

                <div className="signature-user-2">
                    <a className="data">Лікуючий лікар</a>
                    <div className="sign">
                        <div className="sign-block">
                            <a className="sign-value sign-value-1"></a>
                            <div className="sign-desc">підпис</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SurveyDocumentPage;
